from extensions import db
from flask import request,  Blueprint
from flask_cors import cross_origin
from Backend.Posts.PostsModel import Posts
import json

posts_blueprint = Blueprint('posts', __name__)

@posts_blueprint.route('/addpost', methods=['GET', 'POST'])
@cross_origin()
def addProject():
    print(request.json.get("title"))
    print(request.json.get("description"))
    new_post = Posts(title=request.json.get("title"), description=request.json.get("description"))

    db.session.add(new_post)
    db.session.commit()     
    print("Added project")
    return ("", 200)

@posts_blueprint.route('/allposts', methods=['GET', 'POST'])
@cross_origin()
def allPosts():
    allPosts = Posts.query.all()
    print("Sending posts")
    response = [x.toDict() for x in allPosts]
    return (json.dumps(response), 200)