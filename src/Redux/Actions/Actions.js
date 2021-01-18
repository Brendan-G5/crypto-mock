//API
import getData from '../../Services/ApiService'
//Redux
import {LOADING_DATA, SET_DATA, UPDATE_DATA, SET_ERROR} from '../Types'



//Action used on start of app, dispatches load data reducer to start spinner and begins to fetch data
//If successfull, dispatchs Set_data reducer to show data, if not dispatches error reducer to show there has been an error.
export const DisplayData = () => dispatch => {
  dispatch({
    type: LOADING_DATA
  })
  getData().then((res) =>{
    dispatch({
      type: SET_DATA,
      payload: res
    })
  }
  ).catch(err => {
    dispatch({
      type: SET_ERROR
    })
  })
}


//Simply dispatches Update data reducer, used when moving an item from the table to the dropdown or viceversa.
export const TransferElement = (data) => dispatch => {
  dispatch({
    type: UPDATE_DATA,
    payload: data
  })
}