import { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import './Projects.css';
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import SwitchLayout from "../SwitchLayout/SwitchLayout";

const Projects = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [allProjects, setAllProjects] = useState(null);
  const [view, setView] = useState("grid");
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
      <SwitchLayout  passViewData={setView}/>
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