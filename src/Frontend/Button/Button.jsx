import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import DOMPurify from 'dompurify';
import { format } from 'date-fns';

//Navigation component
export const Button = ({form, type, name}) => {

    return (
      <div id="button">
        <button type={type} form={form} value={name}>{name}</button>
      </div>
  );
};

Button.propTypes = {
  form: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  name: "default",
};
