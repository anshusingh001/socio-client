import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
import { LayoutLoader } from './components/layouts/Loaders';

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Groups = lazy(() => import("./pages/Groups"));
const Chat = lazy(() => import("./pages/Chat"));

const App = () => {

  const user = true;
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader/>}>
      <Routes>
        <Route element={<ProtectRoute user={user} />} >
          <Route path='/' element={<Home />}></Route>
          <Route path='/groups' element={<Groups />}></Route>
          <Route path='/chat/:chatId' element={<Chat />}></Route>
        </Route>
        <Route path='/login' element={
          <ProtectRoute user={!user} redirect='/'>
            <Login />
          </ProtectRoute>}></Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
