import { useForm } from "react-hook-form";
import { useState,  } from "react";
import { Button
 } from "../Button/Button";
import "./NewSkill.css";

const NewSkill = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [submittedMessage, setSubmittedMessage] = useState('');

  const onSubmit = skillData => {
    console.log(skillData);
    skillData = JSON.stringify(skillData);
    fetch('http://localhost:5000/newSkill', {
        method: 'post',
        mode: 'cors',
        body: skillData,
        headers: {'Content-Type': 'application/json'}
    }).then(response => {if(response.ok){
            setSubmittedMessage("Added a new skill!");
        } else{
            setSubmittedMessage("Error adding a new skill");
        }
    });
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="addSkill">
        {!!submittedMessage && <p>{submittedMessage}</p>}
        <label className="label">Skill</label>
        <input type="text" placeholder="Skill" {...register("skill")}/>
        <Button type="submit" form="addSkill" name="Add" />
    </form>
  )
}

export default NewSkill;