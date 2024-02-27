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

export const toggleLoopingImageAction = () => ({
  type: 'LOOPING', // ACTION TYPE
});

export const onToggleAutoAction = () => ({
  type: 'AUTO', // ACTION TYPE
});

export const onRandomAction = (number) => ({
  type: 'ON_RANDOM', // ACTION TYPE
  nextIndex: number,
});

export const onNextImageAction = (number) => ({
  type: 'NEXT', // ACTION TYPE
});

export const onPrevImageAction = (number) => ({
  type: 'PREV', // ACTION TYPE
});


// ------------------------------------------------------------
