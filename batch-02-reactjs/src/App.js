import React from 'react';

import ButtonAccordions from './components/buttonAccordions/index.jsx';
import ImagePage from './components/image.jsx';
import Tabs from './components/tabs/index.jsx';

import './App.css';
import './style.css';

function App() {
  return (
    <>
      <Tabs />

      <ButtonAccordions />

      <ImagePage />
    </>
  );
}

export default App;
