from extensions import db
from flask import request, jsonify, Blueprint
from flask_cors import cross_origin
from Backend.Projects.ProjectsModel import Projects
import json

settings_blueprint = Blueprint('settings', __name__)

def read_json_file(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)
    return data

# Function to write JSON data to file
def write_json_file(data, file_path):
    with open(file_path, 'w') as file:
        json.dump(data, file, indent=4)

@settings_blueprint.route('/changelayout', methods=['GET', 'POST'])
@cross_origin()
def addProject():
    data = request.get_json()
    print(data)
    print("got request!")
    layout_name = data.get('LayoutName')
    new_type = data.get('Type')

    # Read JSON data from file
    file_path = 'settings.json'
    layouts_data = read_json_file(file_path)

    # Find the layout by name and update its type
    for layout in layouts_data["Layouts"]:
        if layout["LayoutName"] == layout_name:
            layout["Type"] = new_type
            break

    # Write updated JSON data back to file
    write_json_file(layouts_data, file_path)

    # Return the updated JSON
    return jsonify(layouts_data)

