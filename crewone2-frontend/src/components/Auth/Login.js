import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../styles.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        { username, password }
      );
      alert(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="message">
        Don't have an account?{" "}
        <Link to="/register" className="link">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
