import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

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
import Header from 'components/Header';
import { LOCATION } from 'constants/index';

import './App.css';
import './style.css';

const routes = [
  { path: LOCATION.TAB, element: <Tabs /> },
  { path: LOCATION.BUTTON_ACCORDIONS, element: <ButtonAccordions /> },
  { path: LOCATION.IMAGES, element: <ImagePage /> },
  { path: LOCATION.FORM_BASIC, element: <FormBasic /> },
  { path: LOCATION.FORM_LOGIN, element: <FormLogin /> },
  { path: LOCATION.POSTS, element: <Post /> },
  { path: LOCATION.USE_CALLBACK, element: <UseCallback /> },
  { path: LOCATION.USE_REF, element: <UseRef /> },
  { path: LOCATION.MUSIC, element: <Music /> },
  { path: LOCATION.NOT_FOUND, element: <NotFound /> },
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

      {/* <BrowserRouter> */}

      <Header/>
      
        <Routes>
          {
            routes.map((r, index) => <Route key={index} path={r.path} element={r.element} />)
          }
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
