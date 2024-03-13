import { useForm } from "react-hook-form";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { ContentState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const _contentState = ContentState.createFromText('Sample content state');
  const raw = convertToRaw(_contentState);  // RawDraftContentState JSON
  const [contentState, setContentState] = useState(raw); // ContentState JSON

  const onSubmit = async title => {
    var formData = {title: title.title, body: contentState};
    formData = JSON.stringify(formData);

    await fetch('http://localhost:5000/addpost', {
      method: 'post',
      mode: 'cors',
      body: formData,
      headers: {'Content-Type': 'application/json'}
    });
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label>Title</label>
      <input placeholder="Title" {...register("title")}/>
      <label>Description</label>
      {/* <input placeholder="Description" {...register("description")}/> */}
      <Editor    defaultContentState={contentState}
        onContentStateChange={setContentState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"/>;
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}

export default AddPost;