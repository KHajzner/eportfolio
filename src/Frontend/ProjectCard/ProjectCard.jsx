import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';
import { useState, useEffect } from "react";



//Navigation component
export const ProjectCard = () => {
    const [allProjects, setAllProjects] = useState(null);

    useEffect(() => {
      fetch('http://localhost:5000/allprojects')
      .then(response=>{
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then(data =>{
        setAllProjects(data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      })
    }, [])

    return (
      <div>
        {allProjects && <div> {allProjects.map((project, i) => (
          <div className="card" key={i}>
              <div id="title">{project.title}</div>
              <div id="description">{project.description}</div>
          </div>
          ))}
          </div>
        }
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
