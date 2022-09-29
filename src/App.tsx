import React from 'react'


// Components
import {BrowserRouter, Routes, Route } from "react-router-dom"

// Pages
import Home from './pages/Institutional/Home';
import DevRegister from './pages/Dev/Register/Register';
import CompanyRegister from './pages/Company/Register/Register';

// Notify
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer } from 'react-toastify';

interface Props {}

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Routes of Dev */}
        <Route path="/dev/register" element={<DevRegister />} />

        {/* Routes of Company */}
        <Route path="/company/register" element={<CompanyRegister />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App