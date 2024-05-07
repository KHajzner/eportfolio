import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { format } from 'date-fns';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { useNavigate } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import './View.css';
import { Button } from '../Button/Button';


//Navigation component
export const View = () => {
    let navigate = useNavigate();
    const [viewProject, setViewProject] = useState(null);
    const modules = {
        toolbar: null
    };
    const baseURL = 'http://localhost:5000/view/';
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
      console.log('hello?');
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
    }, [id])

    const Next = () =>{
      console.log(+id + 1);
      const nextID = +id + 1;
      fetch(baseURL + nextID)
      .then(response=>{
        if (response.ok) {
          return navigate('/projects/view/' + nextID)
        }
      })
      .then(data =>{
        setViewProject(data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      })
    }
    const Previous = () =>{
      console.log(viewProject);
      const nextID = id - 1;
      fetch(baseURL + nextID)
      .then(response=>{
        if (response.ok) {
          return navigate('/projects/view/' + nextID);
        }
      })
      .then(data =>{
        setViewProject(data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      })
    }

    return (
      <>
        {viewProject && <><div id="viewContent">
            {viewProject.date && <div id="viewDate">{format(viewProject.date, 'dd.MM.yyyy')}</div>}
            <div id="viewBody">
                <div id="viewTitle" >{viewProject.title}</div>
                <div id="viewShortDescirption">{viewProject.shortDes}</div>
                <div id="break" />
                <ReactQuill value={viewProject.body}  modules={modules} readOnly={true} />
            </div>
        </div>
        <div className="hello"> 
          <Button className="buttons" name="Next" click={Next}></Button>
          {id !== 1 && <Button className="buttons" name="Previous" click={Previous}></Button> }
        </div>
        </>
      }
      </>
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
