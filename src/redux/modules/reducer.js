import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

/* Remove and add actions here. */
export default combineReducers({
  router: routerStateReducer,
});
