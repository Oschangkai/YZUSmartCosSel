import React, { Component } from 'react';
import { Router, Link } from "@reach/router";

import './App.css';

import Login from "./Login";
import Cos from "./Cos/index";
import Dashboard from "./Dashboard/index";


class App extends Component {
  render() {
    return (
      <Router>
        <Login path="login" />
        <Cos path="cos" />
        <Dashboard path="dashboard" />
      </Router>
    );
  }
}

export default App;
