import { BrowserRouter, useNavigate } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom"
import React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreatePoll from './pages/CreatePoll';
import TakePoll from './pages/TakePoll';
// import DisplayPoll from './pages/DisplayPoll';

{/* <Route path='/' element={<Homepage />} /> */}

function App() {
  return (
    <BrowserRouter>
      <Link to='/login'>Login - TEST LINK</Link>
      <Link to='/signup'>Signup - TEST LINK</Link>
      <Link to='/1/display'>diplay1</Link>
      <Link to='/poll/1'>TAKE POLL TEST</Link>
      <Routes>
        <Route path='/' element={<CreatePoll />} />
        <Route path='/:id' element={<TakePoll />} />
        {/* <Route path='/:id/display' element={<DisplayPoll />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>

    )
}

export default App;