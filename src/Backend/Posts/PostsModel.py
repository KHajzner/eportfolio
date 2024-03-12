from server import app
from extensions import db

class Posts(db.Model):
    __tablename__ = 'Posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)

    def toDict(self):
        return dict(id=self.id, title=self.title, description=self.description)
    
    def __init__(self, title, description):
        self.title = title
        self.description = description

def init_posts():
    with app.app_context():
        db.init_app(app)
        db.drop_all()
        db.create_all()