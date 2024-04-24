import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Skills = () => {
  const {
    formState: { errors },
  } = useForm()
  const [allSkills, setAllSkills] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/allSkills')
    .then(response=>{
      if (response.ok) {
        return response.json()
      }
      throw response
    })
    .then(data =>{
      setAllSkills(data);
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
    })
  }, [])

    return (
        <>
          <h1>Skills</h1>
          {allSkills && <>{allSkills.map((skill) => (
          <p>{skill.id}.{skill.skill}</p>
        ))}</>}
        </>
        )
  };
  
export default Skills;