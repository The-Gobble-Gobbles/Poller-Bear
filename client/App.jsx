import { useNavigate, useLocation } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom"
import React, { useEffect } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreatePoll from './pages/CreatePoll';
import TakePoll from './pages/TakePoll';
import { DisplayPoll, UpdateTable } from "./pages/DisplayPoll";

{/* <Route path='/' element={<Homepage />} /> */}

function App() {

  // Navigate to requested URL on component mount
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    navigate(location.path);
  }, [])

  const snowflakes = [];

  for (let i = 0; i < 50; i++) {
    let keyName = `snowflake${i}`
    snowflakes.push(<div key={keyName} className="snowflake"></div>)
  }
  

  return (
    <>
    {snowflakes}
    <h1 id='title'>Poller Bear</h1>
      <nav className="navbar">
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/login' className="nav-link">Login</Link>
        <Link to='/signup' className="nav-link">Sign-up</Link>
        <Link to='/1/display' className="nav-link">Current Poll</Link>
      </nav>

      <Routes>
        <Route path='/' element={<CreatePoll />} />
        <Route path='/:id' element={<TakePoll />} />
        <Route path='/:id/display' element={<DisplayPoll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </>

    )
}

export default App;