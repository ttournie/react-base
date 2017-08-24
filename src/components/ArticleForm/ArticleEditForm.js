import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, EditorState, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class ArticleEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    const editorState = EditorState.createWithContent(ContentState.createFromText('test'));

    this.state = {
      editorState,
    }
  }

  // Update the textfield content after article fetching.
  componentWillReceiveProps(nextProps) {
    var editorState = EditorState.createWithContent(ContentState.createFromText(nextProps.ArticleData.body));
    this.setState({
      editorState,
    });
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  handleSubmit(e) {
   e.preventDefault();
   // Get the raw content.
   var contentState = this.state.editorState.getCurrentContent();
   var rawContent = {"text" : contentState.getPlainText()};
   // Make the request.
   this.props.onArticleEdit(rawContent);
 }

  render() {
    const { editorState } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <input
        type="submit"
        value="Post"
        />
      </form>
    );
  }
}

export default ArticleEditForm;
