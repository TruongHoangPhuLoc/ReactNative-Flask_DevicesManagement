from View import View
from flask import Flask
app = Flask(__name__)
app.register_blueprint(View)


if __name__ == "__main__":
    app.run()
