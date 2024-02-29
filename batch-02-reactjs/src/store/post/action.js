import * as ActionTypes from './actionTypes';

export const getPostsAction = () => ({
  type: ActionTypes.GET_POSTS, // ACTION TYPE
});
export const getPostsSuccessAction = (list) => ({
  type: ActionTypes.GET_POSTS_SUCCESS, // ACTION TYPE
  list,
});
export const getPostsFailedAction = () => ({
  type: ActionTypes.GET_POSTS_FAILED, // ACTION TYPE
});

