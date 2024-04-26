from server import app
from extensions import db
from datetime import datetime

class Projects(db.Model):
    __tablename__ = 'Projects'

    project_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    shortDes = db.Column(db.Text, nullable=False)
    body = db.Column(db.BLOB)
    date = db.Column(db.DateTime, nullable=False)

    def toDict(self):
        return dict(id=self.project_id, title=self.title, body=self.body, date=self.date, shortDes=self.shortDes)
    
    def __init__(self, title, body, shortDes):
        self.title = title
        self.body = body
        self.shortDes = shortDes
        self.date = datetime.now()

# To Initialise (in terminal):
# python3
# from Backend.Projects.ProjectsModel import init_projects
# init_projects()
def init_projects():
    with app.app_context():
        db.init_app(app)
        db.drop_all()
        db.create_all()