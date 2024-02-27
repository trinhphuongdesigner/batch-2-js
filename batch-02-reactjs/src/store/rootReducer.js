import { combineReducers } from 'redux';

import counterReducer from './counter/reducer';
import todoReducer from './todo/reducer';
import imageReducer from './image/reducer';
import postReducer from './post/reducer';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
  imageReducer,
  postReducer,
});

export default rootReducer;
