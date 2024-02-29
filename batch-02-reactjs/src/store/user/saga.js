import { put, takeLeading } from 'redux-saga/effects';
import { getUsersSuccessAction, getUsersFailedAction, getUserSuccessAction, getUserFailedAction } from './action';
import axiosJsonPlaceholder from 'libraries/axiosClient';
import * as ActionTypes from './actionTypes';


function* getUsers() {
  try {
    const response = yield axiosJsonPlaceholder.get('/users');

    yield put(getUsersSuccessAction(response.data));
  } catch (error) {
    yield put(getUsersFailedAction());
    console.log('««««« error »»»»»', error);
  }
}

function* getUser(props) {
  try {
    const { userId } = props;
    const response = yield axiosJsonPlaceholder.get(`/users/${userId}`);

    yield put(getUserSuccessAction(response.data));
  } catch (error) {
    yield put(getUserFailedAction());
    console.log('««««« error »»»»»', error);
  }
}

export default function* userSaga() {
  yield takeLeading(ActionTypes.GET_USERS, getUsers);
  yield takeLeading(ActionTypes.GET_USER, getUser);
};