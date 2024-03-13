import { useState, useEffect } from "react";
import AddPost from "../Frontend/Posts/AddPost";
import { PostCard } from "../Frontend/Posts/PostCard";

const Posts = () => {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/allposts')
    .then(response=>{
      if (response.ok) {
        return response.json()
      }
      throw response
    })
    .then(data =>{
      setAllPosts(data);
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
    })
  }, [])

  return (
  <div>
    <AddPost />
    {allPosts && <div> {allPosts.map((post) => (
          <PostCard title={post.title} description={post.body}/>
        ))}
        </div>
      }
  </div>);
};
  
  export default Posts;