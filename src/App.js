import React, { Component } from 'react';
import map from './assets/images/latinxtechpdx_map.png';
import logo from './assets/images/latinxtechpdx_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar" role="navigation" aria-label="main-navigation">
          <div className="navbar-brand">
            <img className="nav-image" src={ map } alt="latinx tech pdx"/>
            <div className="navbar-item nav-title">
              <h1>LATINX TECH PDX</h1>
            </div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a clasName="navbar-item">Home</a>
              <a clasName="navbar-item">About</a>
              <a clasName="navbar-item">Calendar</a>
              <a clasName="navbar-item">Contact</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
