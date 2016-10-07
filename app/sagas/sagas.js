import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { api, history }  from '../services'
import { REPO } from '../actions/index'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchRepo(action) {
   try {
      console.log(action);
      const repo = yield call(api.fetchRepo, action.url);
      yield put({type: REPO.SUCCESS, repo: repo});
   } catch (e) {
      yield put({type: REPO.FAILURE, message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield* takeEvery(REPO.REQUEST, fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* watchFatchRepo() {
  yield* takeLatest(REPO.REQUEST, fetchRepo);
}

export default function* rootSaga() {
  yield [
    watchFatchRepo()
  ]
}
