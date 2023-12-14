import React, { useState } from 'react';

import './openAtATime.css';

const contentDefault =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const TAB = {
  COMPLETE: 1,
  PENDING: 2,
  WAITING: 3,
};

function OpenAtATime(props) {
  const [activeTab1, setActiveTab1] = useState(true);
  const [activeTab2, setActiveTab2] = useState(false);
  const [activeTab3, setActiveTab3] = useState(false);

  const onClickTab1 = (value) => {
    setActiveTab1((pre) => !pre);
  };

  const onClickTab2 = (value) => {
    setActiveTab2((pre) => !pre);
  };

  const onClickTab3 = (value) => {
    setActiveTab3((pre) => !pre);
  };

  return (
    <div className="tab">
      <TabItem
        title="Complete"
        content={contentDefault}
        value={TAB.COMPLETE}
        activeTab={activeTab1}
        onClick={onClickTab1}
      />

      <TabItem
        title="Pending"
        content={contentDefault}
        value={TAB.PENDING}
        activeTab={activeTab2}
        onClick={onClickTab2}
      />

      {/* <TabItem
        title="Waiting"
        content={contentDefault}
        value={TAB.WAITING}
        activeTab1={activeTab1}
        onClick={onClickTab}
      /> */}

      <div className="tab__item" onClick={onClickTab3}>
        <div
          className={`tab__title ${
            activeTab3 ? 'tab__title--active' : ''
          }`}
        >
          Waiting
        </div>

        {activeTab3 && (
          <div className="tab__content">{contentDefault}</div>
        )}
      </div>
    </div>
  );
}

export default OpenAtATime;

const TabItem = ({ title, content, value, activeTab, onClick }) => {
  return (
    <div className="tab__item" onClick={onClick}>
      <div
        className={`tab__title ${
          activeTab ? 'tab__title--active' : ''
        }`}
      >
        {title}
      </div>

      {activeTab && <div className="tab__content">{content}</div>}
    </div>
  );
};
