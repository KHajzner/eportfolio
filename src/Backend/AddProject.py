from server import app, db
from models import Projects

@app.route('/addproject', methods=['GET', 'POST'])
def register():
    new_project = Projects(title=request.form.get("title"), description=request.form.get("description"))

    db.session.add(new_project)
    db.session.commit()     
    print("Added project")
