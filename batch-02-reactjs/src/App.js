import React, { useState } from 'react';

import KnowLedge from './components/knowLedge.jsx';
import Block from './components/block';
import LoginButton from './components/Buttons/LoginButton.jsx';

import './App.css';
import './style.css';

function App() {
  const [count, setCount] = useState(5);
  // count: tên state
  // setCount: callback func ghi mới giá trị cho state count
  // 5: giá trị khởi tạo cho count

  const onChangeCount = () => {
    setCount(count + 1)
  }
  console.log('««««« count »»»»»', count);

  return (
    <>
      <div className="App">
        <h1>Đếm: {count}</h1>
        <button onClick={onChangeCount}>Tăng</button>
      </div>
    </>
  );
}

export default App;
