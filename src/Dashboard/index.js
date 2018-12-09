import React, { Component } from "react";
import { Breadcrumb, Grid, Button, Container } from "semantic-ui-react";

import Personal from "./Personal";
import Status from "./Status";
import Snapshot from "./Snapshot";
import Schedule from "./Schedule";
import CourseInfo from "./CourseInfo";
import Options from "./Options";

class Dashboard extends Component {
  render() {
    return (
    <div>
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
      </div>
    );
  }
}

export default Dashboard;
