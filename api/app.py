from flask import Flask, request, jsonify, redirect, url_for, session
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
import os

from config import USER_MYSQL, PASSWORD_MYSQL, HOST_MYSQL, DB_NAME_MYSQL

"""
INITIALISATION FLASK
"""

app = Flask(__name__, static_url_path='', static_folder='static', template_folder='templates')
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
LAUNCH APPLICATION
"""

app.run(host='0.0.0.0', port=5000)
