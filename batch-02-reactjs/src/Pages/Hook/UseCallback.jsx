import React, { useState, useCallback } from 'react';

const storeSet = new Set(); 

function UseCallback() {
	const [count, setCount] = useState(0);
	const [countOther, setCountOther] = useState(0);
	const [countOther2, setCountOther2] = useState(0);
	
	// const increase = () => setCount(count + 1);
	// const decrease = () => setCount(count - 1);
	
	// const increaseOther = () => setCountOther(countOther + 1);
	// const decreaseOther = () => setCountOther(countOther + 1);

  const increase = useCallback((num) => () => setCount(count + num), [count]);
  const decrease = useCallback(() => setCount(count - 1), [count]);
    
  const increaseOther = useCallback(() => setCountOther(countOther + 1), [countOther]);
  const decreaseOther = useCallback(() => setCountOther(countOther + 1), [countOther]);
    
  const increaseOther2 = useCallback(() => setCountOther2(countOther2 + 1), [countOther2]);
  const decreaseOther2 = useCallback(() => setCountOther2(countOther2 + 1), [countOther2]);

  storeSet.add(increase());
	storeSet.add(decrease);
	storeSet.add(increaseOther);
	storeSet.add(decreaseOther);
	storeSet.add(increaseOther2);
	storeSet.add(decreaseOther2);

  console.log('««««« storeSet »»»»»', storeSet);
	
	return (
			<>
				<div>Count: {count}</div>
				<button onClick={increase(2)}>+</button>
				<button onClick={decrease}>-</button>

				<div>Count other: {countOther}</div>
				<button onClick={increaseOther}>+</button>
				<button onClick={decreaseOther}>-</button>

				<div>Count other: {countOther2}</div>
				<button onClick={increaseOther2}>+</button>
				<button onClick={decreaseOther2}>-</button>
			</>
	)
}

export default UseCallback;