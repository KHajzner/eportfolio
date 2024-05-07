import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import { useNavigate } from "react-router-dom";
import '../View/View.css';
import { BrowserRouter } from 'react-router-dom';

export const Button = ({className, form, type, name, redirect, click}) => {
  let navigate = useNavigate();

  const onClickRedirect = () =>{
    if (!!redirect){
      let redirectUrl = '/' + redirect;
      console.log(redirectUrl);
      navigate(redirectUrl);
    }
    else{
      return;
    }
  }
    return (
      <div id="button" className={className} >
        <button form={form} type={type} value={name} onClick={!!redirect ? onClickRedirect : click}>{name}</button> 
      </div>
  );
};

Button.propTypes = {
  form: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  redirect: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  name: "Submit",
};
