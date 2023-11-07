// App.js (or your root component)
import React from "react";
import Routing from "./routes/Routing";
import { UserProvider } from "./utils/UserContext";

function App() {
  return (

    <UserProvider>
    <Routing />
  </UserProvider>

  );
}

export default App;


