// COUNTER
// Action Creator
export const increaseCountAction = (num = 1) => ({
  type: 'TANG', // ACTION TYPE
  number: num, // PARAMETER
});

// Action Creator
export const decreaseCountAction = (number) => ({
  type: 'GIAM', // ACTION TYPE
  number: number, // PARAMETER
});

// Action Creator
export const randomImageAction = () => ({
  type: 'RANDOM', // ACTION TYPE
});


// ------------------------------------------------------------
