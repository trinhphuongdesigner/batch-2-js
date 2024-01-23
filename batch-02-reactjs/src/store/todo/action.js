import * as ActionTypes from './actionTypes';

export const actionAddTodo = (payload) => ({
  type: ActionTypes.ADD_TODO,
  payload,
});

export const actionEditTodo = (number) => ({
  type: ActionTypes.EDIT_TODO,
});

export const actionDeleteTodo = (payload) => ({
  type: ActionTypes.DELETE_TODO,
  payload
});
