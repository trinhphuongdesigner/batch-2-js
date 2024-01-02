import React from 'react';

import ButtonAccordions from './components/buttonAccordions/index.jsx';
import ImagePage from './components/image.jsx';
import Tabs from './components/tabs/index.jsx';
import FormBasic from './components/form/FormBasic.jsx';
import FormLogin from './components/form/FormLogin.jsx';

import './App.css';
import './style.css';
import Post from './components/Post/index.jsx';

function App() {
  return (
    <div className='container'>
      {/* <Tabs />

      <ButtonAccordions />

      <ImagePage /> */}

      {/* <FormBasic /> */}

      {/* <FormLogin /> */}

      <Post />
    </div>
  );
}

export default App;
