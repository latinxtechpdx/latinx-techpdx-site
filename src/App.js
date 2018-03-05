import React, { Component } from 'react';
import {Route, Switch, Link } from "react-router-dom";
import map from './assets/images/latinxtechpdx_map.png';
import logo from './assets/images/latinxtechpdx_logo.png';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';

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
              <Link className="navbar-item" to="/">Home</Link>
              <Link className="navbar-item" to="about">About</Link>
              <Link className="navbar-item" to="calendar">Calendar</Link>
              <Link className="navbar-item" to="contact">Contact</Link>
            </div>
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/calendar" component={ Calendar } />
            <Route path="/contact" component={ Contact } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
