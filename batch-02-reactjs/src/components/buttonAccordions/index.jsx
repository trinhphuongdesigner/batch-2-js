import React from 'react';

import MultipleOpen from './multipleOpen';
import OpenAtATime from './openAtATime';

function ButtonAccordions(props) {
  return (
    <div className="d-flex">
      <OpenAtATime />

      <MultipleOpen />
    </div>
  );
}

export default ButtonAccordions;