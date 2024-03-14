import { useForm } from "react-hook-form";
import { useState,  } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const AddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [body, setBody] = useState('');

  const modules = {
    toolbar:[
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const onSubmit = async title => {
    var formData = {title: title.title, body: body};
    formData = JSON.stringify(formData);

    await fetch('http://localhost:5000/addpost', {
      method: 'post',
      mode: 'cors',
      body: formData,
      headers: {'Content-Type': 'application/json'}
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>Title</label>
      <input placeholder="Title" {...register("title")}/>

      <label>Description</label>
      <ReactQuill theme="snow" value={body} onChange={setBody} modules={modules}/>;

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}

export default AddPost;