import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import './SwitchLayout.css';
//Navigation component
const SwitchLayout = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = async data => {
        props.passViewData(data.layout);
        await fetch('http://localhost:5000/changelayout', {
            method: 'post',
            mode: 'cors',
            body: JSON.stringify({LayoutName: props.layoutName, Type: data.layout}),
            headers: {'Content-Type': 'application/json'}
          });
      }
      
    return (
    <form onSubmit={handleSubmit(onSubmit)} id="changeView"> 
        <label>Switch layout of {props.layoutName}</label> <br />
        <input type="radio" id="grid" name="fav_language" value="grid" {...register("layout")}/>
        <label for="html">Grid View</label>
        <input type="radio" id="list" name="fav_language" value="list"  {...register("layout")}/>
        <label for="css">List View</label>
        <Button type="submit" form="changeView" name="Submit" />
    </form>
  );
};

export default SwitchLayout;