import React, { Component } from 'react';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    //axios POST
    if(this.state.inputNumber){
      axios.post('http://localhost:3000/api/data', {"number": this.state.inputNumber})
        .then(res=>console.log(res.data))
        .catch(err=> console.log(err))
    }
  }

  handleInputChange(e) {
    this.setState({inputNumber: e.target.value});
    console.log(this.state.inputNumber);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} type='number' />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Data;
