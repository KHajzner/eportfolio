import { useState, useEffect } from "react";
import { Card } from "../Frontend/Card/Card";
import './layouts.css';
import { Button } from "../Frontend/Button/Button";
import { useForm } from "react-hook-form";
import SwitchLayout from "../Frontend/SwitchLayout/SwitchLayout";
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
          <div class={view + "-container"}> {allProjects.map((project) => (
          <Card class={view + "-item"} id={project.id} date={project.date} title={project.title} description={project.body}/>
        ))}
        </div>
      }
    </div>);
  };
  
export default Projects;