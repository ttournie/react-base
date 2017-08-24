import React from 'react';
import { connect } from "react-redux";
import { getArticle } from "../../actions/ArticleActions";
import ArticleEditForm from "../ArticleForm/ArticleEditForm";
import axios from "axios";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.handleArticleEdit = this.handleArticleEdit.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getArticle(this.props.match.params.article_id));
  }

  // Article submition.
  handleArticleEdit(rawContent) {
    axios.put("http://localhost:3001/api/articles/" + this.props.articles.articles['_id'], rawContent)
    .then(res => {
      this.props.dispatch(getArticle());
    })
  }

  render() {
    const { articles } = this.props.articles;
    return (
      <div>
        <h2>{articles.title}</h2>
        <div>{articles.author}</div>
        <div>{articles.body}</div>
        <ArticleEditForm onArticleEdit={ this.handleArticleEdit } ArticleData={articles}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Article);
