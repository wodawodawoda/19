import {combineReducers} from 'redux';
import comments from './comments';
import users from './users';

const app = combineReducers({
  users,
  comments
});

export default app