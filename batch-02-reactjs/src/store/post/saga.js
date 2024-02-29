import { put, takeLeading } from 'redux-saga/effects';
import { getPostsSuccessAction, getPostsFailedAction } from './action';
import axiosJsonPlaceholder from 'libraries/axiosClient';
import * as ActionTypes from './actionTypes';


function* getPosts() {
  try {
    const response = yield axiosJsonPlaceholder.get('/posts');

    yield put(getPostsSuccessAction(response.data));
  } catch (error) {
    yield put(getPostsFailedAction());
    console.log('««««« error »»»»»', error);
  }
}

export default function* postSaga() {
  yield takeLeading(ActionTypes.GET_POSTS, getPosts);
};