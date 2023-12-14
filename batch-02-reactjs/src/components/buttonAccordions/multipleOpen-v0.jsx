import React, { useState } from 'react';

import './openAtATime.css';

const contentDefault = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function MultipleOpen(props) {
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);

  const onClickTab1 = () => {
    setTab1(true);
    setTab2(false);
    setTab3(false);
  };

  const onClickTab2 = () => {
    setTab1(false);
    setTab2(true);
    setTab3(false);
  };

  const onClickTab3 = () => {
    setTab1(false);
    setTab2(false);
    setTab3(true);
  };

  return (
    <div className='tab'>
      <TabItem
        title="Simple 1"
        content={contentDefault}
        // isActive={false}
        isActive={tab1}
        onClick={onClickTab1}
      />

      <TabItem
        title="Simple 2"
        content={contentDefault}
        isActive={tab2}
        onClick={onClickTab2}
      />

      <TabItem
        title="Simple 3"
        content={contentDefault}
        isActive={tab3}
        onClick={onClickTab3}
      />

    </div>
  );
}

export default MultipleOpen;

const TabItem = ({ title, content, isActive, onClick }) => {
  return (
    <div className="tab__item" onClick={onClick}>

    <div className={`tab__title ${isActive ? 'tab__title--active' : ''}`}>{title}</div>

    {
      isActive && <div className="tab__content">{content}</div>
    }
  </div>
  )
}