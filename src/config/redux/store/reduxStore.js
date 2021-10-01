import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxReducer from '../reducer/reduxReducer';

export const reduxStore = createStore(reduxReducer, applyMiddleware(thunk));