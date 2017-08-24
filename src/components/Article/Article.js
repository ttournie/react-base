import React from 'react';
import { connect } from "react-redux";
import { getArticle } from "../../actions/ArticleActions";

class Article extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.article_id);
  }

  componentWillMount() {
    this.props.dispatch(getArticle(this.props.match.params.article_id));
  }

  render() {
    const { articles } = this.props.articles;
    console.log(articles.body);
    return (
      <div>
        <h2>{articles.title}</h2>
        <div>{articles.author}</div>
        <div>{articles.body}</div>
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
