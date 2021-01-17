import './App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';

import TableRow from './Components/TableRow';

import { DisplayData, TransferElement } from './Redux/Actions/Actions';





export class App extends Component {

  componentDidMount() {
    this.props.DisplayData();
  }

  render() {
    const { visableData, dropdownData, loading, error } = this.props;

    console.log('VISABLE', visableData);
    console.log('DROPDOWN', dropdownData);

    const tableRows = visableData.length ? (
        visableData.map(element => <TableRow key={element.symbol} data={element} />)
    ) : (
      <th colspan = '3'>No Data to Show</th>
    )


    const table = (
      <table>
        <tr>
          <th>CMC Rank</th>
          <th>Symbol</th>
          <th>Price (USD)</th>
        </tr>
        {tableRows}
      </table>
    )

    const manageClick = () => {
      let index = document.getElementById('selected').value;
      console.log(dropdownData[index])
      this.props.TransferElement((dropdownData[index]));
    }

    const dropdown = (
      <div>
      <label>Add another Currency</label>
      <select id='selected'  onChange= {manageClick}>
      <option selected="selected" >--</option>
        {dropdownData.map((element, index) => <option key={element.symbol} value={index}> {element.symbol}</option>)}
      </select>
      </div>
    )




    return (
      <div>
        {dropdown}
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

export default connect(mapStateToProps, { DisplayData, TransferElement })(App);
