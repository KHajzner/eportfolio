import { useState, useEffect } from "react";
import { Card } from "../Frontend/Card/Card";
import './layouts.css';

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
          <h1>Projects</h1>
    {allProjects && <div class="grid-container"> {allProjects.map((project) => (
          <Card class="grid-item" id={project.id} date={project.date} title={project.title} description={project.body}/>
        ))}
        </div>
      }
    </div>);
  };
  
export default Projects;