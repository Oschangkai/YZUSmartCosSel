import React, { Component } from 'react'
import { Container, Header, Form } from 'semantic-ui-react'

const courseOptions = [{ value: "im426", text: "IM426" }, { value: "im427", text: "IM427" }, { value: "im428", text: "IM428" }, { value: "im429", text: "IM429" }, { value: "im430", text: "IM430" }]
const courseType = [ {value: "eng", text: "英文(外語)"}, 
  { value: "phy", text: "體育" },
  { value: "ele", text: "系選修" },
  { value: "gn", text: "通識(GN)" },
  { value: "gs", text: "通識(GS)" },
  { value: "le", text: "通識(LE)" },
  { value: "ls", text: "通識(LS)" },
  { value: "mil", text: "軍訓" } 
]

var range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
var classTime = new Array();

class CosSettings extends Component {
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (event) => {}

  createClasses = _ => {
    range(1,7).forEach(el => {
      el = el*100;
      range(el+1, el+14).forEach(ell => {
        var obj = { value: ell.toString(), text: ell.toString() }
        classTime.push(obj)
      })
    });
  }
  constructor(props){
    super(props);
    this.createClasses();
    this.state = { upperCredit: 25 };
  }


  render() {
    const { value } = this.state;
    
    return (
      <Container text>
        <Header as="h2">1041777 顏振宇</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group inline>
            <Form.Input type="number" name="upperCredit" label='學分數上限' placeholder='25' />
          </Form.Group>
          <Form.Group grouped>
            <label>須安排</label>
            {courseType.map(el => <Form.Checkbox name="courseType" label={el.text} value={el.value} />)}
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Dropdown id="mustHaveCourses" name="mustHaveCourses" label='必排課程' placeholder='請選擇課號' clearable fluid multiple search selection options={courseOptions} />
            <Form.Dropdown id="blacklistCourses" name="blacklistCourses" label='避開課程' placeholder='請選擇課號' clearable fluid multiple search selection options={courseOptions} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Dropdown type="number" id="excludedTime" name="excludedTime" label='不排課時間' placeholder='請選擇課程時間' clearable fluid multiple search selection options={classTime} />              
          </Form.Group>
          <Form.Button>生成課表</Form.Button>
        </Form>
      </Container>
    )
  }
}

export default CosSettings;