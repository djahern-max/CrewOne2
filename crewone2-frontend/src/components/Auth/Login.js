import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Correct import for named export
import "../../styles.css";
import logo from "../../images/logo2.webp";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          username,
          password,
        }
      );
      setMessage("Login successful");
      const token = response.data.token;
      localStorage.setItem("token", token);

      const decoded = jwtDecode(token); // Correct usage of jwtDecode
      const role = decoded.role;

      switch (role) {
        case "Office":
          navigate("/office-dashboard");
          break;
        case "Super":
          navigate("/super-dashboard");
          break;
        case "Driver":
          navigate("/driver-dashboard");
          break;
        default:
          navigate("/");
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
      setMessage("There was an error logging in!");
    }
  };

  return (
    <div className="container_login">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;
