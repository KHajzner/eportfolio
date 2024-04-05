import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import DOMPurify from 'dompurify';

//Navigation component
export const Card = ({title, description}) => {

    const createMarkup = (html) => {
      return {
        __html: DOMPurify.sanitize(html)
      }
    }

    return (
      <div>
          <div className="card">
              <div id="title">{title}</div>
              <div id="description" dangerouslySetInnerHTML={createMarkup(description)}></div>
          </div>
  
      </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,

};

Card.defaultProps = {
  title: "uwu",
  description: "this is the title",
};
