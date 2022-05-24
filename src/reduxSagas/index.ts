import { all, fork } from "redux-saga/effects";
import { watchListApis } from './ListSaga';

export default function* rootSaga() {
  yield all([fork(watchListApis)]);
}
