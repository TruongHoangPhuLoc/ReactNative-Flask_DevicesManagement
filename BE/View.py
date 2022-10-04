from flask import Blueprint
View = Blueprint('View',__name__)
@View.route("/")
def Home():
    return "Home Page"
