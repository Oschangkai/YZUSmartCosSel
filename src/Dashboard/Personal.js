import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class Personal extends Component {
  render() {
    return (
        <Table celled>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell colSpan='2'>
                1041777 顏振宇同學
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>學分數上限：</Table.Cell>
              <Table.Cell>31學分</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>排課須安排：</Table.Cell>
              <Table.Cell>英文 軍訓 體育</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>必排及避開課程：</Table.Cell>
              <Table.Cell><a href='#'>要詳細</a></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>不排課時間：</Table.Cell>
              <Table.Cell><a href='#'>要詳細</a></Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row textAlign='center'>
              <Table.HeaderCell colSpan='2'><a href='#'>修改設定</a></Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
    );
  }
}

export default Personal;
