import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Wysiwyg = () => (
  <Editor
   toolbarClassName="toolbarClassName"
   wrapperClassName="wrapperClassName"
   editorClassName="editorClassName"
 />
)

export default Wysiwyg;
