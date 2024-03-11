from server import db, app

class Projects(db.Model):
    __tablename__ = 'Projects'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)

    def __init__(self, title, description):
        self.title = title
        self.description = description

def init_db():
    with app.app_context():
        db.drop_all()
        db.create_all()