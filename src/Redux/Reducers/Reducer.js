import { LOADING_DATA, SET_DATA, UPDATE_DATA, SET_LOADING, SET_ERROR } from '../Types'


const defaultState = {
  loading: true,
  visableData: [],
  dropdownData: [],
  error: false
}

const sortByCmc = (arr) => {
  return arr.sort(function (a, b) {
    return a.cmc_rank - b.cmc_rank
  });
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
        visableData: action.payload.slice(0, 5),
        dropdownData: action.payload.slice(5),
        loading: false
      }
    case UPDATE_DATA:

      console.log(state.dropdownData)
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
    default: return {
      ...state
    }
  }
}