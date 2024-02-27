// DEFAULT STATE
const defaultState = {
  count: 0,
  isRandom: false,
  isLooping: false,
  isAuto: false,
  index: 0,
  nextImageAfter: 1,
  imageList: [
    'https://images.unsplash.com/photo-1687294920924-b82d79864991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    'https://images.unsplash.com/photo-1685514473556-c983a5971d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1686481394225-dba348a3ee0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80',
    'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    'https://plus.unsplash.com/premium_photo-1673278171570-18af2a6ece31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80',
    'https://images.unsplash.com/photo-1686556029158-90f2cc511c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1686958633466-2a5e0579d2cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1788&q=80',
    'https://images.unsplash.com/photo-1686900248731-5a492eb9a5e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    'https://plus.unsplash.com/premium_photo-1675756583711-ce312872227b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  ],
};

// const [count, setCount] = React.useState(0)

const imageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TANG':
      // new
      const newCount = state.count + action.number;
      return { ...state, count: newCount };

    case 'GIAM':
      // Old
      return Object.assign({}, state, {
        count: state.count - action.number,
      });

    case 'RANDOM':
      // Old
      return {
        ...state,
        isRandom: !state.isRandom,
        isLooping: !state.isRandom && true,
      };

    case 'LOOPING':
      // Old
      return {
        ...state,
        isLooping: !state.isLooping,
        isRandom: !state.isLooping ? false : state.isRandom 
      };

    case 'AUTO':
      // Old
      return {
        ...state,
        isAuto: !state.isAuto,
      };

    case 'ON_RANDOM':
      // Old
      return {
        ...state,
        index: action.nextIndex,
      };

    case 'NEXT':
      // Old
      return {
        ...state,
        index: state.index + 1 < state.imageList.length ? state.index + 1 : 0,
      };

    case 'PREV':
      // Old
      return {
        ...state,
        index: state.index - 1 >= 0 ? state.index - 1 : state.imageList.length - 1,
      };

    default:
      return state;
  }
};

export default imageReducer;

// Notes:
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
