import React, { Component } from "react";
import { Breadcrumb, Grid, Button, Container } from "semantic-ui-react";

import Personal from "./personal";
import Status from "./status";
import Snapshot from "./snapshot";
import Schedule from "./schedule";
import CourseInfo from "./courseInfo";
import Options from "./options";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Grid stretched>
          <Grid.Row>
            <Grid.Column width={3}>
              <Personal />
              <Status />
            </Grid.Column>
            <Grid.Column width={10}>
              <Snapshot />
              <Schedule />
            </Grid.Column>
            <Grid.Column width={3}>
              <CourseInfo />
              <br />
              <Options />
              <br />
              <Button fluid>暫存課程</Button>
              <br />
              <Button fluid>重新生成</Button>
              <br />
              <Button fluid>進行微調</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Dashboard;
