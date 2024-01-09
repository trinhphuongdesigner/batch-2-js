import React, { useState } from 'react';

import './openAtATime.css';

const contentDefault = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function OpenAtATime(props) {
  const [activeTab, setActiveTab] = useState("PENDING");

  const onClickTab1 = () => {
    setActiveTab("COMPLETE");
  };

  const onClickTab2 = () => {
    setActiveTab("PENDING");
  };

  const onClickTab3 = () => {
    setActiveTab("WAITING");
  };

  return (
    <div className='tab'>
      <TabItem
        title="Complete"
        content={contentDefault}
        // isActive={false}
        isActive={activeTab === "COMPLETE"}
        onClick={onClickTab1}
      />

      <TabItem
        title="Pending"
        content={contentDefault}
        isActive={activeTab === "PENDING"}
        onClick={onClickTab2}
      />

      <TabItem
        title="Waiting"
        content={contentDefault}
        isActive={activeTab === "WAITING"}
        onClick={onClickTab3}
      />

    </div>
  );
}

export default OpenAtATime;

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

// function TabItem(props) {
//   return (
//     <div className="tab__item">
//     <div className="tab__title tab__title--active">Simple 1</div>
//     <div className="tab__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
//   </div>
//   )
// }