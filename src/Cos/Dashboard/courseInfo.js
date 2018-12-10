import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { Link } from "@reach/router";

class CourseInfo extends Component {
  render() {
    return (
        <Table celled>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell colSpan='2'>IM402<br />
                決策支援系統
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>開課系所</Table.Cell>
              <Table.Cell>資訊管理學系 四年級</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>學分</Table.Cell>
              <Table.Cell>系必修 3學分</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>授課教師</Table.Cell>
              <Table.Cell>張國忠</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>選課人數</Table.Cell>
              <Table.Cell>110/120</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>上課地點</Table.Cell>
              <Table.Cell>R1501B</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>是否加入名單</Table.Cell>
              <Table.Cell>白名單<br />黑名單<br />必排名單</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row textAlign='center'>
              <Table.HeaderCell colSpan='2'><Link to='#'>課程大綱</Link></Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
    );
  }
}

export default CourseInfo;
