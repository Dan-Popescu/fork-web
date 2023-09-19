from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
from time import gmtime, strftime
from werkzeug.utils import secure_filename
import os
import base64
import json
import hashlib

from config import USER_MYSQL, PASSWORD_MYSQL, HOST_MYSQL, DB_NAME_MYSQL, \
    RASPBERRY_KEY

"""
INITIALISATION FLASK
"""

app = Flask(__name__, static_url_path='',
            static_folder='static',
            template_folder='templates')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["SECRET_KEY"] = os.urandom(24)
app.config['UPLOADED_FILES'] = 'static/files'

"""
INITIALISATION MYSQL
"""

app.config['MYSQL_HOST'] = HOST_MYSQL
app.config['MYSQL_USER'] = USER_MYSQL
app.config['MYSQL_PASSWORD'] = PASSWORD_MYSQL
app.config['MYSQL_DB'] = DB_NAME_MYSQL
mysql = MySQL(app)

"""
API ROUTES FOR CLIENT
"""


@app.route('/client/connect', methods=['POST'])
@cross_origin()
def connect():
    key = request.data
    key = json.loads(key)
    is_connected = False
    try:
        mail = key['email']
        password = key['password']
        cursor = mysql.connection.cursor()
        cursor.execute("SELECT password FROM CITY WHERE mail = %s",
                       (mail,))
        password_verif = cursor.fetchall()[0][0]
        password = hashlib.sha512(password).hexdigest()
        if password_verif == password:
            is_connected = True
        cursor.close()
    except NameError:
        print("error connection : {}".format(NameError))
    return jsonify({"response": is_connected})


@app.route('/client/get_name', methods=["POST", "GET"])
@cross_origin()
def get_name():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT name FROM CITY")
    list_name = cursor.fetchall()
    cursor.close()
    return jsonify({"name": list_name})


@app.route('/client/get_flag', methods=['POST'])
@cross_origin()
def get_flag():
    key = request.data
    key = json.loads(key)
    city = key["city"]
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT color_flag FROM CITY WHERE name = %s",
                   (city,))
    color_flag = cursor.fetchall()[0][0]
    cursor.close()
    return jsonify({"flag": color_flag})


@app.route('/client/get_nb_alert', methods=['POST'])
@cross_origin()
def get_nb_alert():
    key = request.data
    key = json.loads(key)
    city = key["city"]
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT ID FROM WARNINGS WHERE CITY = %s",
                   (city,))
    warnings = cursor.fetchall()
    dico = {"red": 0, "orange": 0, "green": 0}
    for i in range(len(warnings)):
        match warnings[i][0]:
            case 0:
                dico["red"] += 1
            case 1:
                dico["orange"] += 1
            case 2:
                dico["green"] += 1
    cursor.close()
    return jsonify(dico)


@app.route('/client/get_nb_person', methods=['POST'])
@cross_origin()
def get_nb_personne():
    key = request.data
    key = json.loads(key)
    city = key["city"]
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT number_beach, number_sea FROM CITY WHERE NAME = %s "
                   "ORDER BY ID DESC",
                   (city,))
    response = cursor.fetchall()
    cursor.close()
    return jsonify({"beach": response[0][0], "sea": response[0][1]})


@app.route('/client/get_data_list', methods=['POST'])
@cross_origin()
def get_data_list():
    key = request.data
    key = json.loads(key)
    city = key["city"]
    cursor = mysql.connection.cursor()
    dico = {"data_person_per_hour_on_beach": [],
            "data_person_per_hour_on_sea": [],
            "visibility_sea": [],
            "weather_temperature_sea": [],
            "weather_temperature_beach": [],
            "weather_swell": [],
            "weather_wind": [],
            "weather_visibility": []}
    cursor.execute("SELECT nb_beach,nb_sea,cam_visibility,temp_sea,"
                   "temp_beach,swell,wind,visibility FROM DATA"
                   "WHERE CITY = %s ORDER BY ID DESC LIMIT 9 ",
                   (city,))
    all_data = cursor.fetchall()
    cursor.close()
    for i in range(len(all_data)):
        j = 0
        for key, value in dico.items():
            value.append(all_data[i][j])
            j += 1
    return jsonify(dico)


@app.route('/client/get_data_alert', methods=['POST'])
@cross_origin()
def get_data_alert():
    key = request.data
    key = json.loads(key)
    city = key["city"]
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT color, information, picture, notif "
                   "FROM WARNINGS WHERE CITY = %s "
                   "ORDER BY color ASC",
                   (city,))
    all_data = cursor.fetchall()
    cursor.close()
    return jsonify({"data": all_data})


@app.route('/client/set_notif', methods=['POST'])
@cross_origin()
def set_notif():
    key = request.data
    key = json.loads(key)
    city = key["city"]
    cursor = mysql.connection.cursor()
    cursor.execute("UPDATE WARNINGS SET notif = 1 WHERE CITY = %s",
                   (city,))
    cursor.close()
    return jsonify({"res": "yes"})


@app.route('/client/get_init_position', methods=['POST'])
@cross_origin()
def get_init_position():
    key = request.data
    key = json.loads(key)
    city = key["city"]
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT latitude, longitude FROM city WHERE name = %s",
                   (city,))
    data = cursor.fetchall()
    cursor.close()
    return jsonify({"latitude": data[0][0], "longitude": data[0][1]})


@app.route('/client/get_all_position', methods=['POST'])
@cross_origin()
def get_all_position():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT latitude, longitude, name, "
                   "(SELECT COUNT(ID) FROM WARNINGS "
                   "WHERE CITY = CITY.ID) "
                   "FROM CITY")
    all_data = cursor.fetchall()
    cursor.close()
    return jsonify({"data": all_data})


@app.route('/client/get_picture', methods=['POST'])
@cross_origin()
def get_picture_base_64():
    key = request.data
    key = json.loads(key)
    city = key["city"]
    with open(app.config['UPLOADED_FILES'] + city, 'rb') as image_file:
        image_data = image_file.read()
        base64_data = base64.b64encode(image_data).decode('utf-8')
        return jsonify({"picture": base64_data})


"""
API ROUTES FOR RASPBERRY
"""


@app.route('/machine/set_flag', methods=['POST'])
@cross_origin()
def set_flag():
    key = request.data
    key = json.loads(key)
    city = key["city"]
    color = key["color"]
    key = key["key"]
    if key != RASPBERRY_KEY:
        return jsonify({"res": "key error"})
    cursor = mysql.connection.cursor()
    cursor.execute("UPDATE CITY SET color_flag= %s "
                   "WHERE NAME = %s",
                   (color, city))
    cursor.close()
    return jsonify({"res": "yes"})


@app.route('/machine/set_number_people', methods=['POST'])
@cross_origin()
def set_number_people():
    key = request.data
    key = json.loads(key)
    city = key["city"]
    nb_beach = key["nb_beach"]
    nb_sea = key["nb_sea"]
    key = key["key"]
    if key != RASPBERRY_KEY:
        return jsonify({"res": "key error"})
    cursor = mysql.connection.cursor()
    cursor.execute("UPDATE CITY SET number_beach= %s, number_sea= %s"
                   "WHERE NAME = %s",
                   (nb_beach, nb_sea, city))
    cursor.close()
    return jsonify({"res": "yes"})


@app.route('/machine/delete_alert_by_id', methods=['POST'])
@cross_origin()
def delete_alert_by_id():
    key = request.data
    key = json.loads(key)
    id_alert = key["id_alert"]
    key = key["key"]
    if key != RASPBERRY_KEY:
        return jsonify({"res": "key error"})
    cursor = mysql.connection.cursor()
    cursor.execute("DELETE FROM WARNINGS WHERE ID = %s",
                   (id_alert,))
    cursor.close()
    return jsonify({"res": "yes"})


@app.route('/machine/add_alert', methods=['POST'])
@cross_origin()
def add_alert():
    key = request.data
    key = json.loads(key)
    color = key["color"]
    message = key["message"]
    city = key["city"]
    key = key["key"]
    if key != RASPBERRY_KEY:
        return jsonify({"res": "key error"})
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT MAX(ID) FROM WARNINGS")
    id_alert = cursor.fetchall()[0][0] + 1
    cursor.execute("INSERT INTO WARNINGS(ID,color,information,city,notif)"
                   "VALUES(%s,%s,%s,%s,%s)",
                   (id_alert, color, message, city, 0))
    cursor.close()
    return jsonify({"id": id_alert})


@app.route('/machine/add_data_city', methods=['POST'])
@cross_origin()
def add_data_city():
    key = request.data
    key = json.loads(key)
    city = key["city"]
    nb_beach = key["nb_beach"]
    nb_sea = key["nb_sea"]
    precipitation = key["precipitation"]
    temp_beach = key["temp_beach"]
    cloud_cover = key["cloud_cover"]
    wind = key["wind"]
    visibility = key["visibility"]
    cam_visibility = key["cam_visibility"]
    time = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())
    key = key["key"]
    if key != RASPBERRY_KEY:
        return jsonify({"res": "key error"})
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT MAX(ID) FROM DATA")
    id_data = cursor.fetchall()[0][0] + 1
    cursor.execute("INSERT INTO DATA(ID,CITY,nb_beach,nb_sea,"
                   "time,precipitation,temp_beach,cloud_cover,wind,"
                   "visibility,cam_visibility)"
                   "VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
                   (id_data, city, nb_beach, nb_sea, time,
                    precipitation, temp_beach, cloud_cover, wind,
                    visibility, cam_visibility))
    cursor.close()
    return jsonify({"res": "yes"})


@app.route('/machine/add_picture_alert_or_moment', methods=['POST'])
@cross_origin()
def add_picture_alert_or_moment():
    """
    title of the picture is moment_city or alert_number_city
    :return:
    """
    key = request.data
    key = json.loads(key)
    key = key["key"]
    if key != RASPBERRY_KEY:
        return jsonify({"res": "key error"})
    file = request.files['file']
    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOADED_FILES'], filename))
    return jsonify({"res": "yes"})


@app.route('/machine/new_site', methods=['POST'])
@cross_origin()
def add_city():
    key = request.data
    key = json.loads(key)
    name = key["name"]
    mail = key["mail"]
    password = key["password"]
    latitude = key["latitude"]
    longitude = key["longitude"]
    color_flag = key["color_flag"]
    actual_picture = key["actual_picture"]
    number_beach = key["number_beach"]
    number_sea = key["number_sea"]
    key_api = key["key"]
    if key_api != RASPBERRY_KEY:
        return jsonify({"res": "key error"})
    cursor = mysql.connection.cursor()
    cursor.execute("INSERT INTO CITY(NAME,mail"
                   ",password,latitude,longitude"
                   ",color_flag,actual_picture,"
                   "number_beach,number_sea)"
                   "VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s)",
                   (name, mail, password, latitude, longitude,
                    color_flag, actual_picture,
                    number_beach, number_sea))
    cursor.close()
    return jsonify({"res": "yes"})


"""
LAUNCH APPLICATION
"""

app.run(host='0.0.0.0', port=5000)
