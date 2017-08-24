import React, { Component } from 'react';
import './App.css';
import Wysiwyg from './components/Wysiwyg'

class App extends Component {
    render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome express cms</h2>
        </div>
        <Wysiwyg/>
      </div>
    );
  }
}

export default App;
