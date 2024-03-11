from extensions import db
from flask import request,  Blueprint
from flask_cors import cross_origin
from models import Projects


projects_blueprint = Blueprint('projects', __name__)

@projects_blueprint.route('/addproject', methods=['GET', 'POST'])
@cross_origin()
def register():
    print(request.json.get("title"))
    print(request.json.get("description"))
    new_project = Projects(title=request.json.get("title"), description=request.json.get("description"))

    db.session.add(new_project)
    db.session.commit()     
    print("Added project")
    return ("", 200)