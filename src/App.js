import React, { Component } from 'react';
import './App.css';
import Wysiwyg from './components/Wysiwyg'

class App extends Component {
    render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Wysiwyg/>
        </div>
      </div>
    );
  }
}

export default App;
