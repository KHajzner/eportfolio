import { useForm } from "react-hook-form";
import { useState,  useEffect } from "react";
import { Button
 } from "../Button/Button";
import mediaLinks from "./mediaLinks.json";

const AddSocialMedia = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  // const [submittedMessage, setSubmittedMessage] = useState('');
  // const [allSkills, setAllSkills] = useState(null);

  const onSubmit = socialsData => {
    console.log(socialsData);
    socialsData = JSON.stringify({Name: socialsData.socials});
    console.log(socialsData);
    fetch('http://localhost:5000/updateSocials', {
        method: 'post',
        mode: 'cors',
        body:  socialsData,
        headers: {'Content-Type': 'application/json'}
    })
    }

    useEffect(()=>{
      // const projectsLayout = settings.Layouts.find(layout => layout.PageName === "Projects");
      // if(projectsLayout) {
      //   setView(projectsLayout.Type);
      // }
    })
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="updateSocials">
        {/* {!!submittedMessage && <p>{submittedMessage}</p>} */}
        {mediaLinks.SocialMedia.map((item) => (
            <>
              <input type="checkbox" id={item.Name} name={item.Name} value={item.Name} {...register("socials")} /> 
              <label for={item.Name}>{item.Name}</label> <br/>
            </>
            ))}

        <Button type="submit" form="updateSocials" name="Update" />
    </form>
  )
}

export default AddSocialMedia;