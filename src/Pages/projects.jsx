import { ProjectCard } from "../Frontend/Projects/ProjectCard";
import AddProject from "../Frontend/Projects/AddProject";
import { useState, useEffect } from "react";

const Projects = () => {
  const [allProjects, setAllProjects] = useState(null);

    useEffect(() => {
      fetch('http://localhost:5000/allprojects')
      .then(response=>{
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then(data =>{
        setAllProjects(data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      })
    }, [])

    return (
    <div>
    {allProjects && <div> {allProjects.map((post) => (
          <ProjectCard title={post.title} description={post.body}/>
        ))}
        </div>
      }
    </div>);
  };
  
export default Projects;