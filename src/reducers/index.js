import {combineReducers} from 'redux';
import {userReducers} from './userReducers';
import {authentication} from './authentication';

let rootReducer = combineReducers({
  userReducers,
  authentication
});

export {rootReducer};
