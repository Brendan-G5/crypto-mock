import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducer from './Reducers/Reducer';



const middleware = [thunk]

const store = createStore(
  Reducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;