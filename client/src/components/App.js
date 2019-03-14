import React from 'react';
import Data from './Data';

const TableRow = ({row}) => (
  <tr>
    <td key={row.name}>{row.name}</td>
    <td key={row.id}>{row.id}</td>
    <td key={row.price}>{row.price}</td>
  </tr>
)

const Table = ({data}) => (
  <table>
    {data.map(row => {
      <TableRow row={row} />
    })}
  </table>
)

const App = () => {
  return (
    <div>
      <h2>WedUpp Test</h2>
      <Data />
    </div>
  )
}

export default App;
