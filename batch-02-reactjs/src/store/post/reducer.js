// DEFAULT STATE
import * as ActionTypes from './actionTypes';

const defaultState = {
  posts: [],
  post: {},
  isLoadingPosts: false,
  isLoadingPost: false,
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

      case ActionTypes.GET_POST:
        return { ...state, isLoadingPost: true };
      case ActionTypes.GET_POST_SUCCESS:
        return { ...state, isLoadingPost: false, post: action.data };
      case ActionTypes.GET_POST_FAILED:
        return { ...state, isLoadingPost: false, post: {} };

    default:
      return state;
  }
};

export default postReducer;
