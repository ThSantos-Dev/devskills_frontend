// Hooks
import { useAuth } from "./hooks/useAuth";

// Components
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Pages
import CompanyLogin from "./pages/Company/Login/Login";
import CompanyRegister from "./pages/Company/Register/Register";
import DevLogin from "./pages/Dev/Login/Login";
import DevRegister from "./pages/Dev/Register/Register";
import Home from "./pages/Institutional/Home";
import RetrievePassword from "./pages/RetrievePassword/RetrievePassword";
import CreateTest from "./pages/Test/Create/CreateTest";

// Notify
import "react-toastify/dist/ReactToastify.min.css";
import RealizeTest from './pages/Dev/Test/Realize/RealizeTest';
import ReadyProof from "./pages/Test/ReadyProof/ReadyProof";
import Sidebar from './components/shared/Layout/Sidebar/Sidebar';

const App = () => {
  // Utilizando o hook para validar se o usuário está autenticado
  const { auth, loading } = useAuth();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReadyProof />} />

        {/* Routes Shared */}
        <Route path="/:user/redefine" element={<RetrievePassword />} />
        <Route path="/:user/test/create" element={<CreateTest />} />

        {/* Routes of Dev */}
        <Route
          path="/dev/register"
          element={!auth ? <DevRegister /> : <Navigate to="/dev/home" />}
        />
        <Route
          path="/dev/login"
          element={!auth ? <DevLogin /> : <Navigate to="/dev/home" />}
        />
        <Route path="/dev/test/realize/:id" element={<RealizeTest />} />

        {/* Routes of Company */}
        <Route path="/company/register" element={<CompanyRegister />} />
        <Route path="/company/login" element={<CompanyLogin />} />
      </Routes>

      <ToastContainer limit={3} />
    </BrowserRouter>
  );
};

export default App;
