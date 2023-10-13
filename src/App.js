import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todolist from './Components/Todolist/Todolist';
import SignupForm from './Components/SignupForm/SignupForm';

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState('');

  const handleLogin = (username) => {
    setLoggedIn(true);
    setName(username);
  };

  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<SignupForm handleLogin={handleLogin} />}
          />
          <Route
            path="/Todo-list"
            element={<Todolist name={name} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


