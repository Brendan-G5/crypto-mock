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

    let tableRows = error ? (
      <th colspan='100%'>An error has occured</th>
    ) : (loading ? (
      <p>Loading</p>
    ) : (visableData.length ? (
      visableData.map(element => <TableRow key={element.symbol} data={element} />)
    ) : (
        <th colspan='100%'>Select Data from Dropdown</th>
      )
      )
      )


    const table = (
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

    const manageClick = () => {
      let index = document.getElementById('selected').value;
      console.log(dropdownData[index])
      this.props.TransferElement((dropdownData[index]));
    }

    const dropdown = dropdownData.length ? (
      <div className='dropdown'>
        <label>Add another Currency</label>
        <select  id='selected' onChange={manageClick}>
          <option selected="selected" >Options</option>
          {dropdownData.map((element, index) => <option key={element.symbol} value={index}>{element.name} ({element.symbol})</option>)}
        </select>
      </div>
    ) : (
        null
      )




    return (
      <div className='app'>
        <div className = 'title'>
          CryptoMock
        </div>
        <div className = 'info'>
          {table}
          {dropdown}
        </div>
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
