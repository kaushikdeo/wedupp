import React, { Component } from 'react';

class TableData extends Component {

  renderTable = () => {
    return this.props.data.map((item, i)=>{
      console.log(item);
      return (
        <tr>
          <td>{item.name}</td> 
          <td>{item.count}</td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div>
      <table>
        <thead>
          <tr>
            <th>Word</th> 
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTable()}
        </tbody>
      </table>
      </div>
    )
  }
}

export default TableData;
