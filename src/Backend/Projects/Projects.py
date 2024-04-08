from extensions import db
from flask import request,  Blueprint
from flask_cors import cross_origin
from Backend.Projects.ProjectsModel import Projects
import json

projects_blueprint = Blueprint('projects', __name__)

@projects_blueprint.route('/addproject', methods=['GET', 'POST'])
@cross_origin()
def addProject():
    new_post = Projects(title=request.json.get("title"), body=str.encode(request.json.get("body")))
    db.session.add(new_post)
    db.session.commit() 
    print("Added project")
    return ("", 200)

@projects_blueprint.route('/allprojects', methods=['GET', 'POST'])
@cross_origin()
def allProjects():
    allProjects = Projects.query.all()
    response = []
    for project in allProjects:
        project = project.toDict()
        project['body'] = project['body'].decode('utf-8')
        response.append(project)
    return (response, 200)

@projects_blueprint.route('/view/<int:id>', methods=['GET', 'POST'])
@cross_origin()
def viewProject(id):
    project = Projects.query.filter_by(id=id).first()
    project = project.toDict()
    project['body'] = project['body'].decode('utf-8')
    if not project:
        return (project, 500)
    return (project, 200)