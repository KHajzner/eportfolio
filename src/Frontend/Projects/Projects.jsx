import { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import './Projects.css';
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import settings from '../../settings.json';

const Projects = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [allProjects, setAllProjects] = useState(null);
  const [view, setView] = useState("");
  useEffect(()=>{
    const projectsLayout = settings.Layouts.find(layout => layout.LayoutName === "Projects");
    if(projectsLayout) {
      setView(projectsLayout.Type);
    }
  })
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
          {allProjects && 
          <div className={view + "-container"}> {allProjects.map((project) => (
          <Card className={view + "-item"} layout={view} id={project.id} date={project.date} title={project.title} description={project.body}/>
        ))}
        </div>
      }
    </div>);
  };
  
export default Projects;