import './App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';

import Table from './Components/Table'
import Dropdown from './Components/Dropdown'

import { DisplayData } from './Redux/Actions/Actions';

export class App extends Component {

  componentDidMount() {
    this.props.DisplayData();
  }

  render() {

    return (
      <div className='app'>
        <div className = 'title'>
          CRYPTOMOCK
        </div>
        <div className = 'info'>
          <Table/>
          <Dropdown/>
        </div>
      </div>
    )
  }
}



export default connect(null, {DisplayData})(App);
