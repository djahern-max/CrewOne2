import React, { useState } from "react";
import axios from "axios";
import "../../styles.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "Driver",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/register", formData)
      .then((response) => {
        console.log(response.data);
        window.location.href = "/login";
      })
      .catch((error) => {
        console.error("There was an error registering!", error);
      });
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Role</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="Driver">Driver</option>
            <option value="Super">Super</option>
            <option value="Office">Office</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      <p className="message">
        Already have an account?{" "}
        <a href="/login" className="link">
          Login
        </a>
      </p>
    </div>
  );
};

export default Register;
