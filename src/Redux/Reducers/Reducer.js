import { LOADING_DATA, SET_DATA, UPDATE_DATA, SET_ERROR } from '../Types'

//Defualt state here
const defaultState = {
  loading: true,
  visableData: [],
  dropdownData: [],
  error: false
}

//Using this to sort the lists by CMC, though not nessecary thought it would be nicer
const sortByCmc = (arr) => {
  return arr.sort(function (a, b) {
    return a.cmc_rank - b.cmc_rank
  });
}


//Here is the reducer, decided to only go with one reducer as this is a small application.
//Only 4 cases
//LOADING_DATA: Called on start up and shows spinner while API calls run
//SET_DATA: Removes spinner and splits the ordered payload (array of 10 objects) into initial groups of 5 and 5
//UPDATE_DATA: Checks if object is in the table or dropdown, then removes from the one it's in and adds to the other
//SET_ERROR: Sets the error value as true if API call fails
export default function (state = defaultState, action) {
  switch (action.type) {
    case LOADING_DATA: {
      return {
        ...state,
        loading: true
      }
    }
    case SET_DATA:
      return {
        ...state,
        visableData: action.payload.slice(0, 5),
        dropdownData: action.payload.slice(5),
        loading: false,
        error: false
      }
    case UPDATE_DATA:
      if (state.visableData.includes(action.payload)) {
        return {
          ...state,
          visableData: sortByCmc(state.visableData.filter((el) => {
            return el.symbol !== action.payload.symbol
          })),
          dropdownData: sortByCmc([...state.dropdownData, action.payload])
        }
      } else {
        return {
          ...state,
          visableData: sortByCmc([...state.visableData, action.payload]),
          dropdownData: sortByCmc(state.dropdownData.filter((el) => {
            return el.symbol !== action.payload.symbol
          }))
        }
      }
    case SET_ERROR:
      return {
        ...state,
        error: true
      }
    default: return {
      ...state
    }
  }
}