import React, { Component } from 'react';
import {Route, Switch, Link } from "react-router-dom";
import map from './assets/images/latinxtechpdx_map.png';
import logo from './assets/images/latinxtechpdx_logo.png';
import './App.css';
import Home from './Home';
import About from './about/About';
import Sponsors from './about/Sponsors';
import Events from './events/Events';
import Contact from './Contact';

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
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">About</div>
                <div className="navbar-dropdown is-boxed">
                  <Link className="navbar-item" to="about">Our group</Link>
                  <Link className="navbar-item" to="sponsors">Sponsors & supporters</Link>
                </div>
              </div>
              <Link className="navbar-item" to="events">Events</Link>
              <Link className="navbar-item" to="contact">Contact</Link>
            </div>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/sponsors" component={ Sponsors} />
            <Route path="/events" component={ Events } />
            <Route path="/contact" component={ Contact } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
