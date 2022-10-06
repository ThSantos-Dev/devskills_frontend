// Hooks
import { useAuth } from "./hooks/useAuth";


// Components
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ToastContainer } from 'react-toastify';

// Pages
import Home from './pages/Institutional/Home';
import DevRegister from './pages/Dev/Register/Register';
import DevLogin from './pages/Dev/Login/Login';
import CompanyLogin from './pages/Company/Login/Login';
import CompanyRegister from './pages/Company/Register/Register';
import RetrievePassword from "./pages/RetrievePassword/RetrievePassword";


// Notify
import 'react-toastify/dist/ReactToastify.min.css'


const App = () => {

  // Utilizando o hook para validar se o usuário está autenticado
  const {auth, loading} = useAuth()

  if(loading) {
    return <p>Carregando...</p>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Routes Shared */}
        <Route path="/redefine" element={<RetrievePassword />} />

        {/* Routes of Dev */}
        <Route
          path="/dev/register"
          element={!auth ? <DevRegister /> : <Navigate to="/dev/" />}
        />
        <Route
          path="/dev/login"
          element={!auth ? <DevLogin /> : <Navigate to="/dev/" />}
        />

        {/* Routes of Company */}
        <Route path="/company/register" element={<CompanyRegister />} />
        <Route path="/company/login" element={<CompanyLogin />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App