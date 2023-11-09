import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import Todolist from "../components/Todolist";
import Profile from "../components/Profile";
import Logout from "../components/Logout";
import Setting from "../components/Setting";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/Todo-list" element={<Todolist />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Setting" element={<Setting />} />
        </Routes> 
      </Router>
    </>
  );
};

export default Routing;
