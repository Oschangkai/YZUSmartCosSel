import React, { Component } from 'react';
import { Router, Link } from "@reach/router";

import './App.css';

import Login from "./Login";
import Cos from "./Cos/index";


class App extends Component {
  render() {
    return (
      <Router>
        <Login path="login" />
        <Cos path="cos" />
      </Router>
    );
  }
}

export default App;
