//CSS
import '../App.css';

//React
import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux'

//Components
import TableRow from './TableRow';

//DOC:
//The table component has no Actions, just props. The loader, error message and Table rows are handled in the tableRows variable
//Info is passed to a TableRow component for each object. The Solo variable is used to tell if there is only one item left in the table

class Table extends Component {

  render() {
    const { visableData, error, loading } = this.props;

    const solo = visableData.length === 1;

    let tableRows = error ? (
      <tr colSpan='4'>An error has occured... Try Reloading</tr>
    ) : (loading ? (
      <tr>
        <td colSpan='4'>
          <div className='loader'></div>
        </td>
      </tr>
    ) : (
        visableData.map(element => <TableRow key={element.symbol} data={element} solo={solo} />)
      )
      )

    return (
      <table className='table'>
        <thead>
          <tr>
            <th>CMC Rank</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
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
