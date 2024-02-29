// DEFAULT STATE
import * as ActionTypes from './actionTypes';

const defaultState = {
  users: [],
  user: {},
  isLoadingUsers: false,
  isLoadingUser: false,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return { ...state, isLoadingUsers: true };
    case ActionTypes.GET_USERS_SUCCESS:
      return { ...state, isLoadingUsers: false, users: action.list };
    case ActionTypes.GET_USERS_FAILED:
      return { ...state, isLoadingUsers: false, users: [] };
      // return { ...state, isLoadingUsers: false };

      case ActionTypes.GET_USER:
        return { ...state, isLoadingUser: true };
      case ActionTypes.GET_USER_SUCCESS:
        return { ...state, isLoadingUser: false, user: action.data };
      case ActionTypes.GET_USER_FAILED:
        return { ...state, isLoadingUser: false, user: {} };

    default:
      return state;
  }
};

export default userReducer;
