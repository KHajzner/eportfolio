import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';



//Navigation component
export const ProjectCard = ({title, description}) => {
    return (
      <div>
          <div className="card">
              <div id="title">{title}</div>
              <div id="description">{description}</div>
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
