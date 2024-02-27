// DEFAULT STATE
const defaultState = {
  count: 0,
  isRandom: false
};

// const [count, setCount] = React.useState(0)

const counterReducer = (state = defaultState, action) => {
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
      return { ...state, isRandom: !state.isRandom };

    default:
      return state;
  }
};

export default counterReducer;

// Notes:
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
