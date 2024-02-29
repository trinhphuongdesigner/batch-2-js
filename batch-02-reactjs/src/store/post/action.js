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

export const getPostAction = ({ postId }) => ({
  type: ActionTypes.GET_POST, // ACTION TYPE
  postId,
});
export const getPostSuccessAction = (data) => ({
  type: ActionTypes.GET_POST_SUCCESS, // ACTION TYPE
  data,
});
export const getPostFailedAction = () => ({
  type: ActionTypes.GET_POST_FAILED, // ACTION TYPE
});

