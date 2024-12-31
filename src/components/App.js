
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import '../styles/App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Update state when the user logs in
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
};

export default App;
