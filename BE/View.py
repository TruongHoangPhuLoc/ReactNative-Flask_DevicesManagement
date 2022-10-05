from crypt import methods
import json
from urllib import response
from flask import Blueprint, jsonify,request
import db
View = Blueprint('View',__name__)
@View.route("/")
def Home():
    response = jsonify(message="Simple server is running")

    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
@View.route("/users")
def getUser():
    res = db.fetchData('Test','users')
    data = json.dumps(res,default=str)
    return jsonify(data)