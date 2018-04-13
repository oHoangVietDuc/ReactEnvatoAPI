import { combineReducers } from 'redux';
import user from './reducers/user';
import statement from './reducers/statement';

export default combineReducers({
  user,
  statement
});
