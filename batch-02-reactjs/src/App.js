import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";

import { LOCATION, USD } from 'constants/index';

import NotFound from 'Pages/notFound/index.jsx';
import ButtonAccordions from 'Pages/ButtonAccordions/index.jsx';
import Post from 'Pages/Post/index.jsx';
import PostDetail from 'Pages/Post/PostDetail';
import Music from 'Pages/Music/index.jsx';
import ImagePage from 'Pages/Images/index.jsx';
import Tabs from 'Pages/Tabs/index.jsx';
import FormBasic from 'Pages/Form/FormBasic.jsx';
import FormLogin from 'Pages/Form/FormLogin.jsx';
import UseCallback from 'Pages/Hook/UseCallback.jsx';
import UseMemo from 'Pages/Hook/UseMemo.jsx';
import UseRef from 'Pages/Hook/UseRef.jsx';

import Header from 'components/Header';

import './App.css';
import './style.css';
import UserDetail from 'Pages/Post/UserDetail';

const routes = [
  { path: LOCATION.TAB, element: <Tabs /> },
  { path: LOCATION.BUTTON_ACCORDIONS, element: <ButtonAccordions /> },
  { path: LOCATION.IMAGES, element: <ImagePage /> },
  { path: LOCATION.FORM_BASIC, element: <FormBasic /> },
  { path: LOCATION.FORM_LOGIN, element: <FormLogin /> },
  { path: LOCATION.POSTS, element: <Post /> },
  { path: LOCATION.POST_DETAIL, element: <PostDetail /> },
  { path: LOCATION.USER_DETAIL, element: <UserDetail /> },
  { path: LOCATION.USE_CALLBACK, element: <UseCallback /> },
  { path: LOCATION.USE_REF, element: <UseRef /> },
  { path: LOCATION.MUSIC, element: <Music /> },
  { path: LOCATION.NOT_FOUND, element: <NotFound /> },
]

function App() {
  const [isLogin, setIsLogin] = useState(true);

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

      {
        !isLogin && <Navigate to={LOCATION.FORM_LOGIN} replace={true} />
      }

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
