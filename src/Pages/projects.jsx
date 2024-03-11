import { ProjectCard } from "../Frontend/Projects/ProjectCard";
import AddProject from "../Frontend/ProjectCard/AddProject";
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
      <AddProject />
      {allProjects && <div> {allProjects.map((project) => (
            <ProjectCard title={project.title} description={project.description}/>
          ))}
          </div>
        }
    </div>);
  };
  
export default Projects;