from extensions import db
from flask import request,  Blueprint
from flask_cors import cross_origin
from Backend.CVs.CVsModel import CVs
from sqlalchemy import desc
import json

cvs_blueprint = Blueprint('cvs', __name__)

@cvs_blueprint.route('/uploadCV', methods=['GET', 'POST'])
@cross_origin()
def addProject():
    print("welcome")
    if 'file' not in request.files:
        return 'No file part', 400
    file = request.files['file']
    pdf = CVs(title=file.filename, content=file.read())
    db.session.add(pdf)
    db.session.commit()

    return ("", 200)

@cvs_blueprint.route('/displayCVs', methods=['GET', 'POST'])
@cross_origin()
def displayCVs():
    latestCV = CVs.query.order_by(desc('id')).first()
    latestCV = latestCV.toDict()
    return (latestCV, 200)

