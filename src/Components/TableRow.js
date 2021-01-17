import '../App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';

import {TransferElement} from '../Redux/Actions/Actions'


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
          <button onClick={() => this.props.TransferElement(data)}>X</button>
        </td>
      </tr>
    )
  }
}


export default connect(null, {TransferElement})(Table);
