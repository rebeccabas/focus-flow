import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing_page';
import LoginPage from './pages/login-signup';
import HomePage from './pages/sidebar';
// import Timer from './pages/timer';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      {/* <Route path='/timer' element={<Timer/>}/> */}
      <Route path='/home' element={<HomePage/>}/>
    </Routes>
  )
}

export default App
