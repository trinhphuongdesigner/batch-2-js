import React, { useState } from 'react';

import KnowLedge from './components/knowLedge.jsx';
import Block from './components/block';
import LoginButton from './components/Buttons/LoginButton.jsx';

import './App.css';
import './style.css';

function App() {
  const [count, setCount] = useState(5);
  const [tab, setTab] = useState(1);
  // count: tên state
  // setCount: callback func ghi mới giá trị cho state count
  // 5: giá trị khởi tạo cho count

  const onPlusCount = () => {
    setCount((preState) => preState + 1); // Chính thống
    setCount((preState) => preState + 1); // Chính thống
    // setCount(count + 1)
    // setCount(count + 1)
  }

  const onMinusCount = () => {
    // setCount(count - 1);
    setCount((preState) => preState - 1); // Chính thống
  }

  // const onChangeTab = () => {
  // setTab(tab + 1)
  // };

  const onChangeTab = (currentTab) => () => {
    setTab(currentTab);
  };

  const content = () => {
    let content =  '';
    switch (tab) {
      case 1:
        content = 'Tab 1 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores'
        break;
      case 2:
        content = 'Tab 2 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores'
        break;
      case 3:
        content = 'Tab 3 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores'
        break;
      case 4:
        content = 'Tab 4 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores'
        break;
    
      default:
        content = '';
        break;
    }

    return content;
  }

  return (
    <>
      {/* <div className="App">
        <h1>Đếm: {count}</h1>
        <button onClick={onMinusCount}>Giảm</button>
        <button onClick={onPlusCount}>Tăng</button>
      </div> */}
      <div className='container'>
        <div className='wrapper d-flex justify-content-center'>
          {/* <button className={`btn-tab ${tab === 1 ? 'active' : ''}`} onClick={onChangeTab}>History</button> */}
          <button className={`btn-tab ${tab === 1 ? 'active' : ''}`} onClick={onChangeTab(1)}>History</button>
          <button className={`btn-tab ${tab === 2 ? 'active' : ''}`} onClick={onChangeTab(2)}>Method</button>
          <button className={`btn-tab ${tab === 3 ? 'active' : ''}`} onClick={onChangeTab(3)}>Class</button>
          <button className={`btn-tab ${tab === 4 ? 'active' : ''}`} onClick={onChangeTab(4)}>Student</button>
        </div>

        <div className='wrapper'>
          <p>{content()}</p>
        </div>
      </div>
    </>
  );
}

export default App;
