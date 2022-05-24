import { combineReducers } from '@reduxjs/toolkit';
import * as UI from './UI';
import * as List from './List';

const reducers = combineReducers({
  ui: UI.uiSliceReducer,
  list: List.listSliceReducer,
});

export {
  reducers,
  UI,
  List,
};
