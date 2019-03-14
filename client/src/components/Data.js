import React, { Component } from 'react';
import axios from 'axios';
import TableData from './TableData';

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
        let res = await axios.post('http://localhost:3000/api/data', {"number": this.state.inputNumber})
        this.setState({tableData: res.data})
      }
    } catch (error) {
      console.log(error)
    }
  }

  handleInputChange = (e) => {
    this.setState({inputNumber: e.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInputChange} type='number' />
          <button type='submit'>Submit</button>
        </form>
        <div>
          <TableData data={this.state.tableData} />
        </div>
      </div>
    )
  }
}

export default Data;
