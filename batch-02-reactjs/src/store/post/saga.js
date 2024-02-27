import { put, takeLeading } from 'redux-saga/effects';
import { getProductsFailedAction, getProductsSuccessAction, updatePostAction } from './action';
import axiosJsonPlaceholder from 'libraries/axiosClient';


function* getPosts() {
  try {
    const response = yield axiosJsonPlaceholder.get('/posts');

    yield put(updatePostAction(response.data));
  } catch (error) {
    console.log('««««« error »»»»»', error);
    // yield put(getProductsFailedAction());
  }
}

export default function* postSaga() {
  yield takeLeading('GET_POSTS', getPosts);
};