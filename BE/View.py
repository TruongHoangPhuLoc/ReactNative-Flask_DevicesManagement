import json
from flask import Blueprint,request
import db
View = Blueprint('View',__name__)
@View.route("/")
def Home():
    return "Home Page"
@View.route("/users")
def getUser():
    data = db.fetchData('Test','users')
    return json.dumps(data)