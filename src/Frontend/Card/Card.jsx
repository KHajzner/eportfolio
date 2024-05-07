import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import DOMPurify from 'dompurify';
import { format } from 'date-fns';
import { Link, BrowserRouter } from 'react-router-dom';


export const Card = ({id, date, shortDes, title, layout}) => {
    const setLayout = layout ? layout : "grid"

    return (
      <div id={setLayout +"-card"}>
            {date && <div id={setLayout +"-date"}>{format(date, 'dd.MM.yyyy')}</div>}
            <div id={setLayout +"-content"}>
                <div id={setLayout +"-title"}> 
                <Link to={`view/${id}`}>{title}</Link>
                </div>
                <div id={setLayout +"-break"} />
                <div id={setLayout +"-description"}>{shortDes}</div>
            </div>
      </div>
  );
};

Card.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
    shortDes: PropTypes.string,

};

Card.defaultProps = {
  title: "Example Title",
  shortDes: "This is a very short example text to showcase what it would look like.",
};
