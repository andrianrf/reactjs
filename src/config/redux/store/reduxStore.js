import {createStore} from 'redux';
import reduxReducer from '../reducer/reduxReducer';

export const reduxStore = createStore(reduxReducer);