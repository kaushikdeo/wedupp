import React, { Component } from 'react';
import axios from 'axios';
import TableData from './TableData';
import { Jumbotron, Button, Form, FormGroup, Input } from 'reactstrap';


class Data extends Component {

  state = {
    inputNumber: 0,
    tableData: []
  }

  handleSubmit = async (eve) => {
    try {
      eve.preventDefault();
      //axios POST use async await
      if(this.state.inputNumber){
        const res = await axios.post('https://wedupp.herokuapp.com/api/data', {"number": this.state.inputNumber})
        this.setState({tableData: res.data})
      }
    } catch (error) {
      console.log(error)
    }
  }

  handleInputChange = (e) => {
    this.setState({inputNumber: Math.abs(e.target.value)});
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Commit on branch dev</h1>
          <hr className="my-2" />
          <Form onSubmit={this.handleSubmit}>
            <FormGroup style={{width: 200}}>
              <Input type='number' onChange={this.handleInputChange} id="exampleEmail" placeholder="Input a integer value" />
            </FormGroup>
            <Button type='submit'>Submit</Button>
          </Form>
        </Jumbotron>
        <div>
          <TableData data={this.state.tableData} />
        </div>
      </div>
    )
  }
}

export default Data;
