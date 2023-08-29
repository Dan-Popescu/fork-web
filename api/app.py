from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
import os
import json
import hashlib

from config import USER_MYSQL, PASSWORD_MYSQL, HOST_MYSQL, DB_NAME_MYSQL

"""
INITIALISATION FLASK
"""

app = Flask(__name__, static_url_path='',
            static_folder='static',
            template_folder='templates')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["SECRET_KEY"] = os.urandom(24)

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


@app.route('/client/get_nb_personne', methods=['POST'])
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
    cursor.execute("SELECT color, information, picture "
                   "FROM WARNINGS WHERE CITY = %s "
                   "ORDER BY color ASC",
                   (city,))
    all_data = cursor.fetchall()
    return jsonify({"data": all_data})


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
    return jsonify({"data": all_data})


"""
API ROUTES FOR RASPBERRY
"""

"""
LAUNCH APPLICATION
"""

app.run(host='0.0.0.0', port=5000)
