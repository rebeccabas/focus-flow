import React from 'react'
import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing_page';
import LoginPage from './pages/login-signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/login' element={<LoginPage/>} />
    </Routes>
  )
}

export default App
