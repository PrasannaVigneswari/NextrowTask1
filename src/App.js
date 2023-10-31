import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todolist from './components/todolist/Todolist';
import SignupForm from './components/signupform/SignupForm';

function App() {
  
return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignupForm handleLogin={handleLogin} />} />
          <Route path="/Todo-list" element={<Todolist name={name} />}
        </Routes>
      </Router>
    </div>
  );
}
export default App;



