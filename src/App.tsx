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
import ApplicationOverview from "./pages/Company/ApplicationOverview/ApplicationOverview";
import CreateGroup from "./pages/Company/CreateGroup/CreateGroup";
import CompanyMyGroups from "./pages/Company/MyGroups/MyGroups";
import MyTests from "./pages/Company/MyTests/MyTests";
import CompanyProfile from "./pages/Company/Profile/Profile";
import CompanyEditProfile from "./pages/Company/EditProfile/EditProfile";
import DevHome from "./pages/Dev/Home/Home";
import Search from "./pages/Dev/Search/Search";
import DetailsTest from "./pages/Dev/Test/Details/DetailsTest";
import RealizeTest from "./pages/Dev/Test/Realize/RealizeTest";
import Home from "./pages/Institutional/Home";
import TemplateDetails from "./pages/Test/TemplateDetails/TemplateDetails";
import Templates from "./pages/Test/Templates/Templates";
import CompanyGroupDetails from './pages/Company/GroupDetails/GroupDetails';
import TestDetails from "./pages/Test/Details/Details";
import RankingOfDevs from "./pages/Company/RankingOfDevs/RankingOfDevs";

const App = () => {
  // Utilizando o hook para validar se o usuário está autenticado
  const { auth, loading, type } = useAuth();

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<ComapanyHome />} /> */}
        <Route path="/" element={<Home />} />

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
        <Route path="/dev/home" element={<DevHome />} />
        {/* <Route path="/dev/profile" element={<RealizeTest />} /> */}
        <Route path="/dev/search" element={<Search />} />
        {/* <Route path="/dev/mytests" element={<RealizeTest />} /> */}
        {/* <Route path="/dev/notifications" element={<RealizeTest />} /> */}
        {/* <Route path="/dev/exam" element={<RealizeTest />} /> */}
        {/* <Route path="/dev/favorites" element={<RealizeTest />} /> */}
        <Route path="/dev/test/:id" element={<DetailsTest />} />
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
          path="/company/profile/:id"
          element={
            auth && type === "COMPANY" ? (
              <CompanyProfile />
            ) : (
              <Navigate to="/company/login" />
            )
          }
        />
        <Route
          path="/company/profile/:id/edit"
          element={
            auth && type === "COMPANY" ? (
              <CompanyEditProfile />
            ) : (
              <Navigate to="/company/login" />
            )
          }
        />
        <Route
          path="/company/mytests"
          element={
            auth && type === "COMPANY" ? (
              <MyTests />
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
          path="/company/mygroups"
          element={
            auth && type === "COMPANY" ? (
              <CompanyMyGroups />
            ) : (
              <Navigate to="/company/login" />
            )
          }
        />

        <Route
          path="/company/groups/create"
          element={
            auth && type === "COMPANY" ? (
              <CreateGroup />
            ) : (
              <Navigate to="/company/login" />
            )
          }
        />

        <Route
          path="/company/groups/:id"
          element={
            auth && type === "COMPANY" ? (
              <CompanyGroupDetails />
            ) : (
              <Navigate to="/company/login" />
            )
          }
        />

        <Route
          path="/company/test/applicate/:id"
          element={
            auth && type === "COMPANY" ? (
              <ApplicationOverview />
            ) : (
              <Navigate to="/company/login" />
            )
          }
        />
        <Route
          path="/company/test/details/:id"
          element={
            auth && type === "COMPANY" ? <TestDetails /> : <CompanyLogin />
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

        <Route
          path="/company/ranking"
          element={
            auth && type === "COMPANY" ? <RankingOfDevs /> : <p>aaaa</p>
          }
        />
      </Routes>

      <ToastContainer limit={3} />
    </BrowserRouter>
  );
};

export default App;
