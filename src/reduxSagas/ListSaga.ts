import { put, call, takeLatest } from "redux-saga/effects";
import { getNextToGoList } from "../service/listService";
import { UI, List } from "../reduxStates";
import DispatchConstants from "./DispatchConstants";
import { AnyAction } from "redux";

export function* fetchNextToGoList(action: AnyAction): any {
  yield put(UI.updateLoaderStatus(true));
  const apiResponse = yield call(
    getNextToGoList,
    action.payload
  );
  console.log('getNextToGoList apiResponse:::::', apiResponse)
  if (apiResponse.response_type === "success" && apiResponse.response?.data) {
    let summaries = Object.values(apiResponse.response?.data?.race_summaries);
        summaries = summaries.sort(
          (a, b) => a.advertised_start.seconds - b.advertised_start.seconds,
        );
    console.log('summaries', summaries)
    yield put(List.updateNextToGoList(summaries));
  } else {
    yield put(List.updateNextToGoList([]));
    if (
      apiResponse.response?.status === 500 ||
      apiResponse.response?.status === 503
    ) {
      yield put(
        UI.updateAlertContent({
          title: "Something went wrong",
          content:
            `An error has occurred. ${apiResponse.response?.status}`,
        })
      );
    } else {
        yield put(
          UI.updateAlertContent({
            title: "Something went wrong",
            content:
              apiResponse.response?.data?.message ??
              "An error has occurred.",
          })
        );
    }
  }
  yield put(UI.updateLoaderStatus(false));
}


export function* watchListApis() {
  yield takeLatest(DispatchConstants.FETCH_NEXT_TO_GO_LIST, fetchNextToGoList);
}
