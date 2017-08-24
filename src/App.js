import React, { Component } from 'react';
import './App.css';
import Wysiwyg from './components/Wysiwyg'
import ArticleList from './components/ArticleList/ArticleList'

class App extends Component {
    render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome express cms</h2>
        </div>
        <ArticleList/>
        <Wysiwyg/>
      </div>
    );
  }
}

export default App;
