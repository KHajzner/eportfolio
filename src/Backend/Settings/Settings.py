from extensions import db
from flask import request, jsonify, Blueprint
from flask_cors import cross_origin
from Backend.Projects.ProjectsModel import Projects
import json

settings_blueprint = Blueprint('settings', __name__)

def read_json_file(filePath):
    with open(filePath, 'r') as file:
        data = json.load(file)
    return data

def write_json_file(data, filePath):
    with open(filePath, 'w') as file:
        json.dump(data, file, indent=4)

@settings_blueprint.route('/changeLayout', methods=['GET', 'POST'])
@cross_origin()
def changeLayout():
    data = request.get_json()
    pageName = data.get('PageName')
    newType = data.get('Type')
    filePath = 'webSettings.json'
    layoutsData = read_json_file(filePath)

    for layout in layoutsData["Layouts"]:
        if layout["PageName"] == pageName:
            layout["Type"] = newType
            break
    
    write_json_file(layoutsData, filePath)
    return jsonify(layoutsData)

@settings_blueprint.route('/updateSocials', methods=['GET', 'POST'])
@cross_origin()
def updateSocials():
    data = request.get_json()
    print(data)
    filePath = './Frontend/SocialMedia/mediaLinks.json'
    socialData = read_json_file(filePath)

    for oldSocial in socialData["SocialMedia"]:
        for newSocial in data:
            if oldSocial["Name"] == newSocial["Name"]:
                oldSocial["isVisible"] = newSocial["isVisible"]
                if newSocial["Link"] != "":
                    oldSocial["Link"] = newSocial["Link"]
                break
    write_json_file(socialData, filePath)
    return jsonify(socialData)

