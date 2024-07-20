import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../styles.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Driver"); // Default to 'Driver'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/register",
        { username, email, password, role }
      );
      alert(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
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
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div className="form-group">
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Driver">Driver</option>
            <option value="Super">Super</option>
            <option value="Office">Office</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      <p className="message">
        Already have an account?{" "}
        <Link to="/login" className="link">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
