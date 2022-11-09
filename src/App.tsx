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
import RetrievePassword from "./pages/RetrievePassword/RetrievePassword";
import CreateTest from "./pages/Test/Create/CreateTest";

// Pages of company
import ComapanyHome from "./pages/Company/Home/Home";

// Notify
import "react-toastify/dist/ReactToastify.min.css";
import RealizeTest from "./pages/Dev/Test/Realize/RealizeTest";
import TemplateDetails from "./pages/Test/TemplateDetails/TemplateDetails";
import Templates from "./pages/Test/Templates/Templates";
import { useEffect } from "react";
import TestService from "./services/apiDevSkills/common/testService";

const App = () => {
  // Utilizando o hook para validar se o usuário está autenticado
  const { auth, loading, type } = useAuth();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplateDetails />} />

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
        <Route path="/dev/home" element={<RealizeTest />} />
        <Route path="/dev/profile" element={<RealizeTest />} />
        <Route path="/dev/search" element={<RealizeTest />} />
        <Route path="/dev/tests" element={<RealizeTest />} />
        <Route path="/dev/notifications" element={<RealizeTest />} />
        <Route path="/dev/exam" element={<RealizeTest />} />
        <Route path="/dev/favorites" element={<RealizeTest />} />
        <Route path="/dev/test/realize/:id" element={<RealizeTest />} />

        {/* Routes of Company */}
        <Route
          path="/company/register"
          element={
            auth && type === "COMPANY" ? (
              <Navigate to="/company/home" />
            ) : (
              <CompanyRegister />
            )
          }
        />
        <Route
          path="/company/login"
          element={
            auth && type === "COMPANY" ? (
              <Navigate to="/company/home" />
            ) : (
              <CompanyLogin />
            )
          }
        />
        <Route
          path="/company/home"
          element={
            auth && type === "COMPANY" ? (
              <ComapanyHome />
            ) : (
              <Navigate to="/company/login" />
            )
          }
        />
        <Route
          path="/company/profile"
          element={
            auth && type === "COMPANY" ? (
              <ComapanyHome />
            ) : (
              <Navigate to="/company/login" />
            )
          }
        />
        <Route
          path="/company/test/create"
          element={
            auth && type === "COMPANY" ? (
              <CreateTest />
            ) : (
              <Navigate to="/company/login" />
            )
          }
        />
        <Route
          path="/company/test/templates"
          element={
            auth && type === "COMPANY" ? <Templates /> : <CompanyLogin />
          }
        />
        <Route
          path="/company/test/templates/:id"
          element={
            auth && type === "COMPANY" ? <TemplateDetails /> : <p>aaaa</p>
          }
        />
      </Routes>

      <ToastContainer limit={3} />
    </BrowserRouter>
  );
};

export default App;
