import { LOADING_DATA, SET_DATA, UPDATE_DATA, SET_LOADING, SET_ERROR } from '../Types'


const defaultState = {
  loading: true,
  visableData: [],
  dropdownData: [],
  error: false
}

export default function (state = defaultState, action) {
  switch (action.type) {

    case LOADING_DATA: {
      console.log('Loading data HAPPENING!')
      return {
        ...state,
        loading: true
      }
    }
    case SET_DATA:
      console.log('SET_DATA HAPPENING!',)
      return {
        ...state,
        visableData: action.payload.slice(0,5),
        dropdownData: action.payload.slice(5),
        loading: false
      }
    default: return {
      ...state
    }
  }
}