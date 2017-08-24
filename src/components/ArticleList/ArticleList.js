import React from 'react';
import { connect } from "react-redux";
import { getArticles } from "../../actions/ArticleActions";
import Article from "../Article/Article";

class ArticleList extends React.Component {
  componentWillMount() {
        this.props.dispatch(getArticles());
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
             />
          })
          :
          <div>Loading article</div>
        }
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
