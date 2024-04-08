import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { format } from 'date-fns';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

//Navigation component
export const View = () => {

    const [viewProject, setViewProject] = useState(null);

    const baseURL = 'http://localhost:5000/view/';
    const { id } = useParams();
    useEffect(() => {
      fetch(baseURL + id)
      .then(response=>{
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then(data =>{
        setViewProject(data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      })
    }, [])

    const createMarkup = (html) => {
      return {
        __html: DOMPurify.sanitize(html)
      }
    }

    return (
      <div id="card">
        {viewProject && <div>
            {viewProject.date && <div id="date">{format(viewProject.date, 'dd.MM.yyyy')}</div>}
            <div className="content">
                <div>{viewProject.title}</div>
                <div id="break" />
                <div id="description" dangerouslySetInnerHTML={createMarkup(viewProject.description)}></div>
            </div>
        </div>
      }
      </div>
  );
};

View.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,

};

View.defaultProps = {
  title: "uwu",
  description: "this is the title",
};
