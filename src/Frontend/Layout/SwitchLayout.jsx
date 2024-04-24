import React from 'react';
import { Button } from '../Button/Button';
import { useForm } from "react-hook-form";
import './SwitchLayout.css';

const SwitchLayout = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = async data => {
        await fetch('http://localhost:5000/changeLayout', {
            method: 'post',
            mode: 'cors',
            body: JSON.stringify({PageName: props.pageName, Type: data.layout}),
            headers: {'Content-Type': 'application/json'}
          });
      }
      
    return (
    <form onSubmit={handleSubmit(onSubmit)} id="changeView"> 
        <label>Switch layout of {props.pageName}</label> <br />
        <input type="radio" id="grid" name="fav_language" value="grid" {...register("layout")}/>
        <label for="html">Grid View</label>
        <input type="radio" id="list" name="fav_language" value="list"  {...register("layout")}/>
        <label for="css">List View</label>
        <Button type="submit" form="changeView" name="Submit" />
    </form>
  );
};

export default SwitchLayout;