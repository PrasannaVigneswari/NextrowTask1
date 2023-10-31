import React from "react";
import Routing from "./routes/Routing";

function App() {
  return (
    <>
      <Routing />
    </>
  // Track the user's name
  const [name, setName] = useState('');
  // Function to handle login
  const handleLogin = (username) => {
    setName(username);
  };
return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignupForm handleLogin={handleLogin} />} />
          <Route path="/Todo-list" element={<Todolist name={name} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
