import '../App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';


export class Table extends Component {

  render() {
    const {data} = this.props

    return (
      <tr>
        <td>
          {data.cmc_rank}
        </td>
        <td>
          {data.symbol}
        </td>
        <td>
          {data.price}
        </td>
        <td>
          X
        </td>
      </tr>
    )
  }
}


export default connect()(Table);
