import { useForm } from "react-hook-form";
import { useState,  useEffect } from "react";
import { Button
 } from "../Button/Button";
import mediaLinks from "./mediaLinks.json";

const AddSocialMedia = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [checkedItems, setCheckedItems] = useState({});
  const [confirmationMessage, setConfirmationMessage] = useState();

  useEffect(() => {
    const initialCheckedItems = {};
    mediaLinks.SocialMedia.forEach(item => {
      initialCheckedItems[item.Name] = item.isVisible;
    });
    setCheckedItems(initialCheckedItems);
  }, []); 

  const onSubmit = socialsData => {
    let socialData = mediaLinks.SocialMedia.map(item => ({
      Name: item.Name,
      Link: socialsData[item.Name + 'Link'] || '', 
      isVisible: !!socialsData[item.Name],
    }));
    console.log(socialData);
    // socialData = JSON.stringify(socialData);
    fetch('http://localhost:5000/updateSocials', {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(socialData),
        headers: {'Content-Type': 'application/json'}
    }).then(response => {if(response.ok){
      setConfirmationMessage("Updated social media");
      } else{
        setConfirmationMessage("Error updating social media");
      }
    });
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="updateSocials">
        {!!confirmationMessage && <p>{confirmationMessage}</p>}
        {mediaLinks.SocialMedia.map((item, index) => (
            <>
              <input type="checkbox" defaultChecked={item.isVisible} id={item.Name} name={item.Name} {...register(item.Name)} /> 
              <label>{item.Name}</label>
              {watch(item.Name) && (<input type="text" name={item.Name} placeholder={`Enter ${item.Name} URL`} {...register((item.Name + 'Link'), {value:item.Link} )} />
          )}<br/>
            </>
            ))}

        <Button type="submit" form="updateSocials" name="Update" />
    </form>
  )
}

export default AddSocialMedia;