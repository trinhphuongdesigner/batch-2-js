import React, { useState } from 'react';

import './openAtATime.css';

const contentDefault = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function MultipleOpen(props) {
  return (
    <div className='tab'>
      <TabItem
        title="Simple 1"
        content={contentDefault}
      />

      <TabItem
        title="Simple 2"
        content={contentDefault}
      />

      <TabItem
        title="Simple 3"
        content={contentDefault}
      />
    </div>
  );
}

export default MultipleOpen;

const TabItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const onToggle = () => {
    setIsActive((s) => !s);
  };

  return (
    <div className="tab__item" onClick={onToggle}>

    <div className={`tab__title ${isActive ? 'tab__title--active' : ''}`}>{title}</div>

    {
      isActive && <div className="tab__content">{content}</div>
    }
  </div>
  )
}