import * as ActionTypes from './actionTypes';
// COUNTER
// Action Creator
export const increaseCountAction = (number) => ({
  type: ActionTypes.COUNTER_INCREASE_COUNT, // ACTION TYPE
  number: number, // PARAMETER
});

// Action Creator
export const decreaseCountAction = (number) => ({
  type: ActionTypes.COUNTER_DECREASE_COUNT, // ACTION TYPE
  number: number, //PARAMETER
});
// ------------------------------------------------------------
