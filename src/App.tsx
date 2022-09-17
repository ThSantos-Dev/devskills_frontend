import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom"


import Home from './pages/Institutional/Home';
import Register from './pages/Auth/Register/Register';

interface Props {}

const App = (props: Props) => {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register/:user' element={<Register/>}/>
      </Routes>    
    </BrowserRouter>
  )
}

export default App