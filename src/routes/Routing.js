import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from "../components/signupform/SignupForm";
import Todolist from "../components/todolist/Todolist";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/Todo-list" element={<Todolist />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
