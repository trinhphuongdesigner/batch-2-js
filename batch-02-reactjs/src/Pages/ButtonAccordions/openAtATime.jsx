import React, { useState } from 'react';

import './openAtATime.css';

const contentDefault = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const TAB = {
  COMPLETE: 1,
  PENDING: 2,
  WAITING: 3,
}

function OpenAtATime(props) {
  const [activeTab, setActiveTab] = useState(TAB.COMPLETE);

  const onClickTab = (value) => {
    setActiveTab(value);
  };

  return (
    <div className='tab'>
      <TabItem
        title="Complete"
        content={contentDefault}
        value={TAB.COMPLETE}
        activeTab={activeTab}
        onClick={onClickTab}
      />

      <TabItem
        title="Pending"
        content={contentDefault}
        value={TAB.PENDING}
        activeTab={activeTab}
        onClick={onClickTab}
      />

      <TabItem
        title="Waiting"
        content={contentDefault}
        value={TAB.WAITING}
        activeTab={activeTab}
        onClick={onClickTab}
      />

    </div>
  );
}

export default OpenAtATime;

const TabItem = ({ title, content, value, activeTab, onClick }) => {

  return (
    <div className="tab__item" onClick={() => onClick(value)}>

    <div className={`tab__title ${value === activeTab ? 'tab__title--active' : ''}`}>{title}</div>

    {
      value === activeTab && <div className="tab__content">{content}</div>
    }
  </div>
  )
}
