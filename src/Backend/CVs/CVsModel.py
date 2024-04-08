from server import app
from extensions import db
from datetime import datetime


class CVs(db.Model):
    __tablename__ = 'CVs'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.LargeBinary)
    title = db.Column(db.String(255))
    date = db.Column(db.DateTime, nullable=False)

    def toDict(self):
        return dict(id=self.id, title=self.title, content=self.content, date=self.date)
    
    def __init__(self, content, title):
        self.content = content
        self.title = title
        self.date = datetime.now()

# To Initialise (in terminal):
# python3
# from Backend.CVs.CVsModel import init_cvs
# init_cvs()
def init_cvs():
    with app.app_context():
        db.init_app(app)
        db.drop_all()
        db.create_all()