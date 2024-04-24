from extensions import db
from flask import request,  Blueprint
from flask_cors import cross_origin
from Backend.Skills.SkillsModel import Skills
import json

skills_blueprint = Blueprint('skills', __name__)

@skills_blueprint.route('/newSkill', methods=['GET', 'POST'])
@cross_origin()
def newSkill():
    new_skill = Skills(skill=request.json.get("skill"))
    db.session.add(new_skill)
    db.session.commit() 
    print("Added project")
    return ("", 200)

@skills_blueprint.route('/allSkills', methods=['GET', 'POST'])
@cross_origin()
def allProjects():
    allProjects = Skills.query.all()
    response = []
    for project in allProjects:
        project = project.toDict()
        project['body'] = project['body'].decode('utf-8')
        response.append(project)
    return (response, 200)

