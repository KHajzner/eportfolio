import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';
import data from '../../JSON/allProjects.json';


//Navigation component
export const ProjectCard = ({title, description}) => {
    console.log(data);
    return (
      <div>
        {data.map((project, i) => (
          <div class="card" key={i}>
              <div id="title">{project.title}</div>
              <div id="description">{project.description}</div>
          </div>
        ))}
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
