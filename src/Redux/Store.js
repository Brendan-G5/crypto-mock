//Redux
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './Reducers/Reducer';

//This is the Redux store, only thing worth noting here is Thunk being used to allow async functions
//to be used in actions.

const middleware = [thunk]

const store = createStore(
  Reducer,
  compose(
    applyMiddleware(...middleware))
);

export default store;