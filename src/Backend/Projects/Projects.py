from extensions import db
from flask import request,  Blueprint
from flask_cors import cross_origin
from Backend.Projects.ProjectsModel import Projects
import json

projects_blueprint = Blueprint('projects', __name__)

@projects_blueprint.route('/addproject', methods=['GET', 'POST'])
@cross_origin()
def addProject():
    print(request.json.get("title"))
    print(request.json.get("description"))
    new_project = Projects(title=request.json.get("title"), description=request.json.get("description"))

    db.session.add(new_project)
    db.session.commit()     
    print("Added project")
    return ("", 200)

@projects_blueprint.route('/allprojects', methods=['GET', 'POST'])
@cross_origin()
def allProjects():
    allProjects = Projects.query.all()
    print("Sending projects")
    response = [x.toDict() for x in allProjects]
    return (json.dumps(response), 200)