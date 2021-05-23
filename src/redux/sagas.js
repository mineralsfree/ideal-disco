import {all} from 'redux-saga/effects'
import searchSaga from "./searchSagas";

export default function* rootSaga() {
  yield all([
    searchSaga()
  ])
}