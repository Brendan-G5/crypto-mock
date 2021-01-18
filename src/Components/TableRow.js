import '../App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';

import {TransferElement} from '../Redux/Actions/Actions'


export class Table extends Component {

  render() {
    const {data, solo} = this.props

    const removeButton = solo ? (
      <button disabled>X</button>

      ): (
        <button onClick={() => this.props.TransferElement(data)}>X</button>

      )



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
          {removeButton}
        </td>
      </tr>
    )
  }
}


export default connect(null, {TransferElement})(Table);
