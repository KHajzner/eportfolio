from extensions import db
from flask import request,  Blueprint
from flask_cors import cross_origin
from Backend.Posts.PostsModel import Posts
import json

posts_blueprint = Blueprint('posts', __name__)

@posts_blueprint.route('/addpost', methods=['GET', 'POST'])
@cross_origin()
def addProject():
    new_post = Posts(title=request.json.get("title"), body=str.encode(request.json.get("body")))
    db.session.add(new_post)
    db.session.commit()

    return ("", 200)

@posts_blueprint.route('/allposts', methods=['GET', 'POST'])
@cross_origin()
def allPosts():
    allPosts = Posts.query.all()
    response = []
    for post in allPosts:
        post = post.toDict()
        post['body'] = post['body'].decode('utf-8')
        response.append(post)
    return (response, 200)