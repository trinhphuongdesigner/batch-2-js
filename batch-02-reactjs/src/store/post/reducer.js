// DEFAULT STATE
const defaultState = {
  posts: [],
};

const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_POST':
      return { ...state };

    case 'UPDATE_POSTS':
      return { ...state, posts: action.list };

    default:
      return state;
  }
};

export default postReducer;
