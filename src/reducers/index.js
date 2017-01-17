import {combineReducers} from 'redux';
import {user} from './user';
import {authentication} from './authentication';

let rootReducer = combineReducers({
  user,
  authentication
});

export {rootReducer};
