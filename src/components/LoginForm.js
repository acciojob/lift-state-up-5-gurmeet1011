import React from "react";

const LoginForm = ({ isLoggedIn, onLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    onLogin(); // Notify the parent component
  };

  if (isLoggedIn) {
    return <p>You are logged in!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" required />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
