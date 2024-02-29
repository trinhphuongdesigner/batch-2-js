import { put, takeLeading } from 'redux-saga/effects';
import { getPostsSuccessAction, getPostsFailedAction, getPostSuccessAction, getPostFailedAction } from './action';
import axiosJsonPlaceholder from 'libraries/axiosClient';
import * as ActionTypes from './actionTypes';
import { getUserAction } from 'store/user/action';


function* getPosts() {
  try {
    const response = yield axiosJsonPlaceholder.get('/posts');

    yield put(getPostsSuccessAction(response.data));
  } catch (error) {
    yield put(getPostsFailedAction());
    console.log('««««« error »»»»»', error);
  }
}

function* getPost(props) {
  try {
    const { postId } = props;
    const response = yield axiosJsonPlaceholder.get(`/posts/${postId}`);

    yield put(getUserAction({ userId: response.data.userId}));
    yield put(getPostSuccessAction(response.data));
  } catch (error) {
    yield put(getPostFailedAction());
    console.log('««««« error »»»»»', error);
  }
}

export default function* postSaga() {
  yield takeLeading(ActionTypes.GET_POSTS, getPosts);
  yield takeLeading(ActionTypes.GET_POST, getPost);
};