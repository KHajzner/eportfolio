import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import DOMPurify from 'dompurify';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

//Navigation component
export const Card = ({id, date, title, description, layout}) => {
    const setLayout = layout ? layout : "grid"
    const createMarkup = (html) => {
      return {
        __html: DOMPurify.sanitize(html)
      }
    }

    return (
      <div class={setLayout +"-item"} id="card">
            {date && <div id={setLayout +"-date"}>{format(date, 'dd.MM.yyyy')}</div>}
            <div id={setLayout +"-content"}>
                <div id={setLayout +"-title"}> 
                <Link to={`view/${id}`}>{title}</Link></div>
                <div id={setLayout +"-break"} />
                <div id={setLayout +"-description"} dangerouslySetInnerHTML={createMarkup(description)}></div>
            </div>
      </div>
  );
};

Card.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,

};

Card.defaultProps = {
  title: "uwu",
  description: "this is the title",
};
