// Hooks
import { useAuth as devUseAuth } from "./hooks/dev/useAuth";


// Components
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// Pages
import Home from './pages/Institutional/Home';
import DevRegister from './pages/Dev/Register/Register';
import DevLogin from './pages/Dev/Login/Login';
import CompanyLogin from './pages/Company/Login/Login';
import CompanyRegister from './pages/Company/Register/Register';

// Notify
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer } from 'react-toastify';

interface Props {}

const App = (props: Props) => {

  // Utilizando o hook para validar se o usuário está autenticado
  const {auth: devAuth, loading: devLoading} = devUseAuth()

  if(devLoading) {
    return <p>Carregando...</p>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Routes of Dev */}
        <Route
          path="/dev/register"
          element={!devAuth ? <DevRegister /> : <Navigate to="/dev/" />}
        />
        <Route
          path="/dev/login"
          element={!devAuth ? <DevLogin /> : <Navigate to="/dev/" />}
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