import {all, call, put, takeLatest} from 'redux-saga/effects'
import {getRepos, getUser} from "../api";

function* fetchUser(action) {
  try {
    const user = yield call(getUser, action.payload);
    const repos = yield call(getRepos, action.payload, '1');
    yield put({type: "search/search_success", payload: {user, repos}});
  } catch (e) {
    yield put({type: "search/search_user_error", message: e.message});
  }
}

function* fetchPageRepos(action) {
  try {


    const repos = yield call(getRepos, action.payload[0], action.payload[1])
    yield put({type: "search/repos_success", payload: {repos}});

  } catch (e) {
    yield put({type: "search/search_error", message: e.message});
  }
}

function* searchSaga() {
  yield all([
    yield takeLatest("search/fetch_repos", fetchPageRepos),
    yield takeLatest("search/search", fetchUser)
  ])
}

export default searchSaga;
