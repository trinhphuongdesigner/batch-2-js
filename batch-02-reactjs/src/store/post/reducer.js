// DEFAULT STATE
import * as ActionTypes from './actionTypes';

const defaultState = {
  posts: [],
  isLoadingPosts: false,
};

const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS:
      return { ...state, isLoadingPosts: true };
    case ActionTypes.GET_POSTS_SUCCESS:
      return { ...state, isLoadingPosts: false, posts: action.list };
    case ActionTypes.GET_POSTS_FAILED:
      return { ...state, isLoadingPosts: false, posts: [] };
      // return { ...state, isLoadingPosts: false };

    default:
      return state;
  }
};

export default postReducer;
