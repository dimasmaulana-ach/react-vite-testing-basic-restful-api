import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vite from "./pages/Vite";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";
import Role from "./pages/admin/Role";
import Users from "./pages/admin/Users";
import UserDetails from "./pages/admin/Users/UserDetails";
import UserEdit from "./pages/admin/Users/UserEdit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} Component={Vite} />
        <Route path={"/register"} Component={Register} />
        <Route path={"/login"} Component={Login} />
        <Route path={"/dashboard"} Component={Dashboard} />
        <Route path={"/dashboard/users"} Component={Users} />
        <Route path={"/dashboard/users/:username"} Component={UserDetails} />
        <Route path={"/dashboard/users/edit/:username"} Component={UserEdit} />
        <Route path={"/dashboard/role"} Component={Role} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
