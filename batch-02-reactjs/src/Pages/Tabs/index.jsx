import React, { useState } from 'react';

import './style.css';

const tabData = [
  {
    value: 1,
    content: 'Tab 1 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores',
    title: 'History',
  },
  {
    value: 2,
    content: 'Tab 2 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores',
    title: 'Method',
  },
  {
    value: 3,
    content: 'Tab 3 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores',
    title: 'Class',
  },
  {
    value: 4,
    content: 'Tab 4 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores',
    title: 'Student',
  },
  {
    value: 5,
    content: 'Tab 5 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores',
    title: 'Tab 5',
  },
];

function Tabs() {
  const [tab, setTab] = useState(tabData[3]);

  const onChangeTab = (currentTab) => () => {
    setTab(currentTab);
  };

  return (
    <>
      <div className='container'>
        <div className='wrapper d-flex justify-content-center'>
          {
            tabData.map((item) => <button className={`btn-tab ${tab.value === item.value ? 'active' : ''}`} onClick={onChangeTab(item)}>{item.title}</button>)
          }
        </div>

        <div className='wrapper'>
          <p>{tab.content}</p>
        </div>
      </div>
    </>
  );
}

export default Tabs;
