import getData from '../../Services/ApiService'
import {LOADING_DATA, SET_DATA, UPDATE_DATA, SET_LOADING, SET_ERROR} from '../Types'


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
      type: SET_ERROR,
      payload: []
    })
  })
}

export const TransferElement = (data) => dispatch => {
  dispatch({
    type: UPDATE_DATA,
    payload: data
  })
}