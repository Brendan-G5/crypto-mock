//CSS
import '../App.css';

//React
import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux'
import { TransferElement } from '../Redux/Actions/Actions';

//DOC:
//The Dropdown component takes the dropdown data and places it in a select tag
//ManageClick function is used to call the Transfer element action and pass along the object as well.
//Dropdown is disabled if there are no longer options to choose from
class Dropdown extends Component {

  render() {
    const { dropdownData } = this.props;

    const manageClick = () => {
      let index = document.getElementById('selected').value;
      console.log(dropdownData[index])
      this.props.TransferElement((dropdownData[index]));
    }

    return (
      <div className='dropdown'>
        <select className='select-css' id='selected' onChange={manageClick} disabled={!dropdownData.length}>
          <option selected="selected" >Additional Options</option>
          {dropdownData.map((element, index) => <option key={element.symbol} value={index}>{element.name} ({element.symbol})</option>)}
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dropdownData: state.dropdownData,
})

export default connect(mapStateToProps, { TransferElement })(Dropdown);
