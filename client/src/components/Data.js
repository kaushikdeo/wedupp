import React, { Component } from 'react';
import axios from 'axios';

class Data extends Component {
  
  state = {
    inputNumber: 0
  }

  handleSubmit = async (eve) => {
    try {
      eve.preventDefault();
      //axios POST use async await
      if(this.state.inputNumber){
        let res = axios.post('http://localhost:3000/api/data', {"number": this.state.inputNumber})
        console.log(res.data)
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
      </div>
    )
  }
}

export default Data;
