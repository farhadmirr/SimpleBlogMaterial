import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Feed from './Pages/Feed';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/feed" element={<Feed />} />
      </Routes>
  );
}

export default App;
