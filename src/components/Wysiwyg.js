import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};


class Wysiwyg extends React.Component {
  constructor(props) {
    super(props);
    const editorState = EditorState.createWithContent(convertFromRaw(content));
    console.log(editorState)
    this.state = {
      editorState,
    }
  }

  onEditorStateChange: Function = (editorState) => {
    console.log(editorState)
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }
}

export default Wysiwyg;
