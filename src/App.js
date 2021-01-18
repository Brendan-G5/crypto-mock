//CSS
import './App.css';

//React
import React, { Component } from 'react';

//Components
import Table from './Components/Table'
import Dropdown from './Components/Dropdown'

//Redux
import { connect } from 'react-redux'
import { DisplayData } from './Redux/Actions/Actions';

//DOC:
//The App component simply calls the API on load through the Display Data Action.
//Pulls in the Table and the drop down Components

class App extends Component {

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
