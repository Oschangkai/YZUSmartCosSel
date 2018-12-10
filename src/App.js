import React, { Component } from 'react';
import { Router, Link } from "@reach/router";
import { Container } from 'semantic-ui-react';

import './App.css';

import Login from "./Login";
import Cos from "./Cos";


const Main = () => (
  <Container text>
    <Link to="login">登入頁面</Link>
    <br />
    <Link to="cos">選課頁面</Link>
    <br />
    <Link to="cos/settings">選課設定頁面</Link>
    <br />
  </Container>
)

class App extends Component {
  render() {
    return (
      <Router>
        <Main path="/" />
        <Login path="login" />
        <Cos path="cos/*" />
      </Router>
    );
  }
}

export default App;
