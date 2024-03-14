import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
// import Editor from '@draft-js-plugins/editor';

import { EditorState, RichUtils, Editor } from 'draft-js';
import { convertToHTML } from 'draft-convert';

const Image = (props) => {
  return <img alt={props.alt} src={props.src} />;
};


// const imagePlugin = createImagePlugin();
// const staticToolbarPlugin = createToolbarPlugin();
// const { Toolbar } = staticToolbarPlugin;

const InFormEditor = ({onBodyDataRequest}) => {

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    onBodyDataRequest(convertedContent);
  }, [editorState]);

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  return (
    <div>
      <Editor
        editorState={editorState} 
        onChange={setEditorState}

      />
     

      </div>
  )
}

export default InFormEditor;