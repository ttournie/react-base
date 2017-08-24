import React from 'react';

const Article = props => (
  <div>
    <h3>{props.title}</h3>
    <div>{props.author}</div>
    <div>{props.body}</div>
  </div>
)

export default Article;
