import React from 'react';
import { connect } from "react-redux";
import { getArticles } from "../../actions/ArticleActions";
import Article from "../Article/Article";
import ArticleForm from "../ArticleForm/ArticleForm";
import axios from "axios";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.handleArticleSubmit = this.handleArticleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getArticles());
  }

  // Article submition.
  handleArticleSubmit(rawContent) {
    axios.post("http://localhost:3001/api/articles", rawContent)
    .then(res => {
      this.props.dispatch(getArticles());
    })
  }

  render() {
    const { articles } = this.props.articles;
    return (
      <div>
        <h2>Article List</h2>
        {articles.length > 0 ?
          articles.map((article, i) => {
             return <Article
              key={i}
              title={article.title}
              body={article.body}
              author={article.author}
             />
          })
          :
          <div>Loading article</div>
        }
        <ArticleForm onArticleSubmit={ this.handleArticleSubmit }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(ArticleList);
