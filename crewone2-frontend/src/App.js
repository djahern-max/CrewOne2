// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import OfficeDashboard from "./components/Dashboards/OfficeDashboard";
import Navbar from "./components/layouts/Navbar";
import "./styles.css"; // Import the main stylesheet

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/office-dashboard" element={<OfficeDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
