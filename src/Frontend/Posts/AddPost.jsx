import { get, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
// import { Editor } from "react-draft-wysiwyg";
import { EditorState, RichUtils, Editor } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import InFormEditor from "../Editor/InFormEditor";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [bodyData, setBodyData] = useState('');
  const getBodyData = (data) => {
    setBodyData(data);
  }
  const [value, setValue] = useState('');
  const onSubmit = async title => {
    var formData = {title: title.title, body: value};
    formData = JSON.stringify(formData);

    await fetch('http://localhost:5000/addpost', {
      method: 'post',
      mode: 'cors',
      body: formData,
      headers: {'Content-Type': 'application/json'}
    });
  }
const modules = {toolbar:[
  [{ 'header': [1, 2, false] }],
  ['bold', 'italic', 'underline','strike', 'blockquote'],
  [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
  ['link', 'image'],
  ['clean']
],}
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>Title</label>
      <input placeholder="Title" {...register("title")}/>
      <label>Description</label>
      <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules}/>;
      <InFormEditor onBodyDataRequest={getBodyData}/>
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}

export default AddPost;