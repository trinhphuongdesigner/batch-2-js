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

function App() {
  return (
    <>
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
    </div>
    <Routes>
      <Route index element={<Tabs />} />
      <Route path="button-accordions" element={<ButtonAccordions />} />
      <Route path="images" element={<ImagePage />} />
      <Route path="form/basic" element={<FormBasic />} />
      <Route path="form/login" element={<FormLogin />} />
      <Route path="posts" element={<Post />} />
      <Route path="use-callback" element={<UseCallback />} />
      <Route path="use-ref" element={<UseRef />} />
      <Route path="music" element={<Music />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
  );
}

export default App;
