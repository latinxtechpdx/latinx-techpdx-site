import React, { Component } from 'react';
import logo from './assets/images/latinxtechpdx_map.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-title">
            {/* Testing font weight setup */}
            <span className="Thin">Welcome </span>
            <span className="Light">to Latinx </span>
            <span className="Normal">Tech </span>
            <span className="Black">PDX</span>
          </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
