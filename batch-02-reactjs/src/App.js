import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import NotFound from 'Pages/notFound/index.jsx';
import ButtonAccordions from 'Pages/ButtonAccordions/index.jsx';

import ImagePage from 'components/image.jsx';
import Tabs from 'components/tabs/index.jsx';
import FormBasic from 'components/form/FormBasic.jsx';
import FormLogin from 'components/form/FormLogin.jsx';
import Post from 'components/Post/index.jsx';
import UseMemo from 'components/Hook/UseMemo.jsx';
import UseCallback from 'components/Hook/UseCallback.jsx';
import UseRef from 'components/Hook/UseRef.jsx';
import Music from 'components/Music/index.jsx';

import './App.css';
import './style.css';

const routes = [
  { path: '/', element: <Tabs /> },
  { path: 'button-accordions', element: <ButtonAccordions /> },
  { path: 'images', element: <ImagePage /> },
  { path: 'form/basic', element: <FormBasic /> },
  { path: 'form/login', element: <FormLogin /> },
  { path: 'posts', element: <Post /> },
  { path: 'use-callback', element: <UseCallback /> },
  { path: 'use-ref', element: <UseRef /> },
  { path: 'music', element: <Music /> },
  { path: '*', element: <NotFound /> },
]

function App() {
  return (
    <div className='container'>
      {/* <Tabs /> */}
      {/* <ButtonAccordions /> */}
      {/* <ImagePage /> */}
      {/* <FormBasic /> */}
      {/* <FormLogin /> */}
      {/* <Post /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <UseRef /> */}
      {/* <Music /> */}

      <Routes>
        {
          routes.map((r, index) => <Route key={index} path={r.path} element={r.element} />)
        }
      </Routes>
    </div>
  );
}

export default App;
