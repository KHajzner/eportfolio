import { useState, useEffect } from "react";
import { Card } from "../Frontend/Card/Card";
import './layouts.css';

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
    <h1>Posts</h1>
    {allPosts && <div class="grid-container" id="wholeGrid"> {allPosts.map((post) => (
          <Card date={post.date} title={post.title} description={post.body}/>
        ))}
        </div>
      }
  </div>);
};
  
  export default Posts;