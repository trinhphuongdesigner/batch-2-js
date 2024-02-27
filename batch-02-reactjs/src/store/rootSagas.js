import { all, fork } from 'redux-saga/effects';
import postSaga from './post/saga';

export default function* rootSaga() {
  yield all([
    fork(postSaga),
  ]);
}