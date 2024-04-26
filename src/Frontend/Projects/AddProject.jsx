import { useForm } from "react-hook-form";
import { useState,  } from "react";
import ReactQuill from 'react-quill';
import { useNavigate } from "react-router-dom";
import 'react-quill/dist/quill.snow.css';
import { Button
 } from "../Button/Button";
import './ReactQuill.css';
import './AddProject.css';


const AddProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [body, setBody] = useState('');

  const modules = {
    toolbar:[
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      ['link', 'image', 'video', 'formula'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']          
    ],
  }  
  let navigate = useNavigate();

  const onSubmit =  data => {
    var formData = {title: data.title, shortDes: data.shortDes, body: body};
    formData = JSON.stringify(formData);

    fetch('http://localhost:5000/addproject', {
      method: 'post',
      mode: 'cors',
      body: formData,
      headers: {'Content-Type': 'application/json'}
    }).then(response=>{
      if (response.ok) {
          navigate('/projects');
      };
    });
  }

  return (
    <div className="projectForm">
    <form onSubmit={handleSubmit(onSubmit)} id="addProject">
    <br/><br/>
      <label className="label">Title</label><br/><br/>
      <input type="text" placeholder="Title" {...register("title",  { required: true })}/><br/>
      {errors.title && <span>This field is required</span>}

      <br/><br/><br/>

      <label className="label">Short Description</label><br/><br/>
      <input type="text" placeholder="Short Description" {...register("shortDes",  { required: true })}/><br/>
      {errors.shortDes && <span>This field is required</span>}
      <br/><br/><br/>
      <label className="label">Description</label><br/><br/>
      <ReactQuill value={body} onChange={setBody} modules={modules}/>

      <br/>
      <Button type="submit" form="addProject" name="Submit" />
    </form>
    </div>
  )
}

export default AddProject;