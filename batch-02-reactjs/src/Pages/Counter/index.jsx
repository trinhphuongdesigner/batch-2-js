import React, { useState } from 'react';

import CounterLabel from 'components/Counter/CounterLabel';
import DecreaseCounterButton from 'components/Counter/DecreaseCounterButton';
import IncreaseCounterButton from 'components/Counter/IncreaseCounterButton';

function CounterApp() {
  // const [count, setCount] = useState(0);

  // const onDecrease = () => {
  //   setCount((prevState) => prevState - 1);
  // }

  // const onIncrease = () => {
  //   setCount((prevState) => prevState + 1);
  // }

  return (
    <div className="container-xl d-flex flex-column align-items-center py-4">
      {/* <button onClick={onDecrease}>-</button>
      {count}
      <button onClick={onIncrease}>+</button> */}
      <DecreaseCounterButton />
      <CounterLabel />
      <IncreaseCounterButton />
    </div>
  );
}

export default CounterApp;
