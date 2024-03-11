from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///eportfolio.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app)

@app.route('/')
@cross_origin()
def hello_world():  # put application's code here
    return 'Hello World!'

if __name__ == '__main__':
    my_host = "127.0.0.1"

    from extensions import db
    db.init_app(app)

    from Backend.Projects.AddProject import projects_blueprint
    app.register_blueprint(projects_blueprint)

    app.run()