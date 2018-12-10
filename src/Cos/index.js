import React, { Component } from 'react';
import { Router, Redirect } from '@reach/router';

import Dashboard from "./Dashboard";
import CosSettings from "./settings";

class Cos extends Component {
  render() {
    return (
      <div style={{marginTop: "2.5em"}}>
        <Router>
          <Redirect from="/" to="/cos/dashboard" />
          <Dashboard path="dashboard" />
          <CosSettings path="settings" />
        </Router>
      </div>
    );
  }
}

export default Cos;
