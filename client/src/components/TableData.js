import React, { Component } from 'react';
import { Table } from 'reactstrap';

class TableData extends Component {

  renderTable = () => {
    return this.props.data.map((item, i)=>{
      console.log(item);
      return (
        <tr key={i}>
          <td>{item.name}</td> 
          <td>{item.count}</td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Word</th> 
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default TableData;
