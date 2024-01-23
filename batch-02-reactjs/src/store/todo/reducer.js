import * as ActionTypes from './actionTypes';

// DEFAULT STATE
const defaultState = {
  todoList: [
    // {
    //   id: 1,
    //   text: "Nhiệm vụ mẫu",
    // }
  ],
  loading: false,
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      const newList = [...state.todoList];
      newList.push(action.payload);
  
      action.payload.callback();
  
      return { ...state, todoList: newList };
    }

    case ActionTypes.DELETE_TODO: {
      const newList = state.todoList.filter((i) => i.id !== action.payload.id);

      return { ...state, todoList: newList };
    }
    default:
      return state;
  }
};

export default todoReducer;

// Notes:
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
