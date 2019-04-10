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
          <h1 className="display-3">WedUpp App - Commit on branch dev</h1>
          <p className="lead">This is a simple page in React front end and express node backend. You have to input a number in the input field below and you will get back the words and their count from a predefined text file.</p>
          <p className="lead">If you put a negative number it will be considered as a positive integer</p>
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
