import React, { Component } from "react";
import { Table, Header } from "semantic-ui-react";
import { Link } from "@reach/router";

class Status extends Component {
  render() {
    return (
      <div>
        <Header size='medium' textAlign='center'>目前課表： 共24學分</Header>
        <Table celled selectable>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell colSpan='2'>資管系畢業門檻<br />
              (已獲得/需達到)
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>畢業審核</Table.Cell>
              <Table.Cell>未能畢業</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>本系必修科目</Table.Cell>
              <Table.Cell>68/80</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>本系選修科目</Table.Cell>
              <Table.Cell>15/23</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>共同必修及通識課程</Table.Cell>
              <Table.Cell>25/33</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>經典五十</Table.Cell>
              <Table.Cell>15/50</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>英語檢定</Table.Cell>
              <Table.Cell>未通過</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>服務課程時數</Table.Cell>
              <Table.Cell>18/18</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>服務學習時數</Table.Cell>
              <Table.Cell>18/18</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row textAlign='center'>
              <Table.HeaderCell colSpan='2'><Link to='#'>要詳細</Link></Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}

export default Status;
