export const getPostAction = (num = 1) => ({
  type: 'GET_POSTS', // ACTION TYPE
});

export const updatePostAction = (list) => ({
  type: 'UPDATE_POSTS', // ACTION TYPE
  list,
});
