import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { api } from '../../services';
import { REPO } from '../App/constants';

function* fetchRepo(action) {
  try {
    const repo = yield call(api.fetchRepo, action.name);
    yield put({ type: REPO.SUCCESS, repo });
  } catch (e) {
    yield put({ type: REPO.FAILURE, message: e.message });
  }
}

function* getFatchRepoWatcher() {
  yield* takeLatest(REPO.REQUEST, fetchRepo);
}

export default [
  getFatchRepoWatcher,
];
