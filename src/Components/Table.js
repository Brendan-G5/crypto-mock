import '../App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';

import TableRow from './TableRow';

export class Table extends Component {

  render() {
    const { visableData, error, loading } = this.props;

    const solo = visableData.length === 1;

    let tableRows = error ? (
      <th colspan='4'>An error has occured... Try Reloading</th>
    ) : (loading ? (
      <th colspan = '4'>
        <div className='loader'></div>
      </th>
    ) : (
        visableData.map(element => <TableRow key={element.symbol} data={element} solo={solo} />)
      )
      )

    return (
      <table className='table'>
        <tr>
          <th>CMC Rank</th>
          <th>Symbol</th>
          <th>Price (USD)</th>
          <th>Remove</th>
        </tr>
        {tableRows}
      </table>
    )
  }
}


const mapStateToProps = state => ({
  visableData: state.visableData,
  error: state.error,
  loading: state.loading
})

export default connect(mapStateToProps)(Table);
