import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from './Upload';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>File Upload</h1>
        <Upload/>
      </div>
    );
  }
}

export default App;
