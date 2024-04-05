from server import app
from extensions import db
from datetime import datetime

class Projects(db.Model):
    __tablename__ = 'Projects'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    body = db.Column(db.BLOB)
    date = db.Column(db.DateTime, nullable=False)

    def toDict(self):
        return dict(id=self.id, title=self.title, body=self.body, date=self.date)
    
    def __init__(self, title, body):
        self.title = title
        self.body = body
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