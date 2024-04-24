from server import app
from extensions import db
from datetime import datetime

class Skills(db.Model):
    __tablename__ = 'Skills'

    id = db.Column(db.Integer, primary_key=True)
    skill = db.Column(db.String(255), nullable=False)
   
    def toDict(self):
        return dict(id=self.id, skill=self.skill)
    
    def __init__(self, skill):
        self.skill = skill

# To Initialise (in terminal):
# python3
# from Backend.Skills.SkillsModel import init_skills
# init_skills()
def init_skills():
    with app.app_context():
        db.init_app(app)
        db.drop_all()
        db.create_all()