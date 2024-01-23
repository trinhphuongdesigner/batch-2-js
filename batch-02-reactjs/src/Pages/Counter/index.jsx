import React from 'react';

import CounterLabel from 'components/Counter/CounterLabel';
import DecreaseCounterButton from 'components/Counter/DecreaseCounterButton';
import IncreaseCounterButton from 'components/Counter/IncreaseCounterButton';

function CounterApp() {
  return (
    <div className="container-xl d-flex flex-column align-items-center py-4">
      <DecreaseCounterButton />
      <CounterLabel />
      <IncreaseCounterButton />
    </div>
  );
}

export default CounterApp;
