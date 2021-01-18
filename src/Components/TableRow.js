//CSS
import '../App.css';

//React
import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import {TransferElement} from '../Redux/Actions/Actions';

//DOC:
//TableRow is used to make the row for each item, if solo is passed, the remove button is disabled.
//The Transfer Element action is called when the remove button is clicked and the records object is passed along to that action.


class TableRow extends Component {

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

export default connect(null, {TransferElement})(TableRow);
