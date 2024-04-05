import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';
import DOMPurify from 'dompurify';


//Navigation component
export const ProjectCard = ({title, description}) => {
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

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,

};

ProjectCard.defaultProps = {
  title: "hello",
  description: "this is the title",
};
