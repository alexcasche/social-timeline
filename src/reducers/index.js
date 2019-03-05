import { combineReducers } from 'redux';
import { settings } from './settings';
import { users } from './users';
import { posts } from './posts';

const rootReducer = combineReducers({
  settings,
  users,
  posts
})

export default rootReducer