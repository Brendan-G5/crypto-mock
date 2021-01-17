import './App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';

import TableRow from './Components/TableRow';

import { DisplayData } from './Redux/Actions/Actions'




export class App extends Component {

  componentDidMount() {
    this.props.DisplayData();
  }

  render() {
    const { visableData, dropdownData, loading, error } = this.props;


    const table = (
      <table>
        <tr>
          <th>CMC Rank</th>
          <th>Symbol</th>
          <th>Price (USD)</th>
        </tr>
        {visableData.map(element => <TableRow key={element.symbol} data={element} />)}
      </table>
    )



    return (
      <div>
        {table}
      </div>
    )
  }
}




const mapStateToProps = state => ({
  loading: state.loading,
  visableData: state.visableData,
  dropdownData: state.dropdownData,
  error: state.error
})

export default connect(mapStateToProps, { DisplayData })(App);
