import '../App.css';
import { connect } from 'react-redux'
import React, { Component } from 'react';


import { TransferElement } from '../Redux/Actions/Actions';





export class Dropdown extends Component {


  render() {
    const { dropdownData } = this.props;

    const manageClick = () => {
      let index = document.getElementById('selected').value;
      console.log(dropdownData[index])
      this.props.TransferElement((dropdownData[index]));
    }

    const dropdown = (
      <div className='dropdown'>
        <select className='select-css'  id='selected' onChange={manageClick} disabled = {!dropdownData.length}>
          <option selected="selected" >Additional Options</option>
          {dropdownData.map((element, index) => <option key={element.symbol} value={index}>{element.name} ({element.symbol})</option>)}
        </select>
      </div>
    )





    return (
      <div>
        {dropdown}
      </div>
    )
  }
}




const mapStateToProps = state => ({
  dropdownData: state.dropdownData,
})

export default connect(mapStateToProps, { TransferElement })(Dropdown);
