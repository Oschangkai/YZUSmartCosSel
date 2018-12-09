import React, { Component } from "react";
import { Table, Segment, Card, Placeholder } from "semantic-ui-react";

const src = "/images/wireframe/white-image.png";

class Snapshot extends Component {
  render() {
    return (
      <div>
        <Card.Group itemsPerRow={8}>
          <Card>
            {/* <Card.Content header=''  textAlign='center'/> */}
            <Card.Content description='暫存課表'  textAlign='center'/>
            {/* <Card.Content extra=''  textAlign='center'/> */}
          </Card>
          <Card link>
            <Card.Content description=''>
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
            </Card.Content>
            <Card.Content extra textAlign='center'>課表1</Card.Content>
          </Card>
          <Card link>
            <Card.Content description=''>
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
            </Card.Content>
            <Card.Content extra textAlign='center'>課表2</Card.Content>
          </Card>
          <Card link>
            <Card.Content description=''>
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
            </Card.Content>
            <Card.Content extra textAlign='center'>課表3</Card.Content>
          </Card>
          <Card link>
            <Card.Content description=''>
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
            </Card.Content>
            <Card.Content extra textAlign='center'>課表4</Card.Content>
          </Card>
          <Card link>
            <Card.Content description=''>
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
            </Card.Content>
            <Card.Content extra textAlign='center'>課表5</Card.Content>
          </Card>
          <Card link>
            <Card.Content description=''>
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
            </Card.Content>
            <Card.Content extra textAlign='center'>課表6</Card.Content>
          </Card>
          <Card link>
            <Card.Content description=''>
              <Placeholder>
                <Placeholder.Image square />
              </Placeholder>
            </Card.Content>
            <Card.Content extra textAlign='center'>課表7</Card.Content>
          </Card>
          {/* <Card color='red' image={src} />
          <Card color='orange' image={src} />
          <Card color='yellow' image={src} />
          <Card color='olive' image={src} />
          <Card color='green' image={src} />
          <Card color='teal' image={src} />
          <Card color='blue' image={src} />
          <Card color='violet' image={src} />
          <Card color='purple' image={src} />
          <Card color='pink' image={src} />
          <Card color='brown' image={src} />
          <Card color='grey' image={src} /> */}
        </Card.Group>
      </div>
    );
  }
}

export default Snapshot;
