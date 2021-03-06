import React, { Component } from "react";
import { Link } from "@reach/router";

import { Table } from "semantic-ui-react";

class Options extends Component {
  render() {
    return (
      <Table celled selectable>
        <Table.Header>
        <Table.Row textAlign='center'>
          <Table.HeaderCell colSpan='2'>同時段課程</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body>
        <Table.Row textAlign='center'>
          <Table.Cell>IM106 (3)<br />
          管理學
          </Table.Cell>
          <Table.Cell><Link to="#">更改</Link></Table.Cell>
        </Table.Row>
        <Table.Row textAlign='center'>
          <Table.Cell>IM106 (3)<br />
          管理學
          </Table.Cell>
          <Table.Cell><Link to="#">更改</Link></Table.Cell>
        </Table.Row>
        <Table.Row textAlign='center'>
          <Table.Cell>IM106 (3)<br />
          管理學
          </Table.Cell>
          <Table.Cell><Link to="#">更改</Link></Table.Cell>
        </Table.Row>
        <Table.Row textAlign='center'>
          <Table.Cell>IM106 (3)<br />
          管理學
          </Table.Cell>
          <Table.Cell><Link to="#">更改</Link></Table.Cell>
        </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default Options;
