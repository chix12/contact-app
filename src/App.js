import React, { Component } from 'react';
import {BrowserRouter as Router, Link}  from 'react-router-dom'
import './App.css';
import Routes from './Routes'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Link to="/contacts">
          <input type='button' value = 'Contact List' />
        </Link>
        <Link to="/addcontact">
          <input type='button' value='Add Contact' />
        </Link>
        <Routes />
      </div>
      </Router>
    );
  }
}

export default App;
