from extensions import db
from flask import request,  Blueprint
from flask_cors import cross_origin
from Backend.Posts.PostsModel import Posts
import json

posts_blueprint = Blueprint('posts', __name__)

@posts_blueprint.route('/addpost', methods=['GET', 'POST'])
@cross_origin()
def addProject():
    new_post = Posts(title=request.json.get("title"), body=str.encode(json.dumps(request.json.get("body"))))

    db.session.add(new_post)
    db.session.commit()

    return ("", 200)

@posts_blueprint.route('/allposts', methods=['GET', 'POST'])
@cross_origin()
def allPosts():
    allPosts = Posts.query.all()
    # for post in allPosts:
    #     post['body'] = json.loads(post['body'].decode('utf-8'))
    #     print(post)
    # response = [x.toDict() for x in allPosts]
    response = []
    for post in allPosts:
        post = post.toDict()
        post = post['body'].decode('utf-8')
        response.append(post)
    # response = json.loads(response)
    print(response)
    return (json.dumps(response), 200)