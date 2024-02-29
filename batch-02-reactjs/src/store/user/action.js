import * as ActionTypes from './actionTypes';

export const getUsersAction = () => ({
  type: ActionTypes.GET_USERS, // ACTION TYPE
});
export const getUsersSuccessAction = (list) => ({
  type: ActionTypes.GET_USERS_SUCCESS, // ACTION TYPE
  list,
});
export const getUsersFailedAction = () => ({
  type: ActionTypes.GET_USERS_FAILED, // ACTION TYPE
});

export const getUserAction = ({ userId }) => ({
  type: ActionTypes.GET_USER, // ACTION TYPE
  userId,
});
export const getUserSuccessAction = (data) => ({
  type: ActionTypes.GET_USER_SUCCESS, // ACTION TYPE
  data,
});
export const getUserFailedAction = () => ({
  type: ActionTypes.GET_USER_FAILED, // ACTION TYPE
});

