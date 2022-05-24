import { combineReducers } from '@reduxjs/toolkit';
import * as UI from './UI';
import * as User from './User';
import * as List from './List';

const reducers = combineReducers({
  ui: UI.uiSliceReducer,
  user: User.userSliceReducer,
  list: List.listSliceReducer,
});

export {
  reducers,
  UI,
  User,
  List,
};
