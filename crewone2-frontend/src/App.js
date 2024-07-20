import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Home from "./components/Home";
import OfficeDashboard from "./components/Dashboards/OfficeDashboard";
import SuperDashboard from "./components/Dashboards/SuperDashboard";
import DriverDashboard from "./components/Dashboards/DriverDashboard";
import "./styles.css"; // Assuming this is your styles file

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/office-dashboard" element={<OfficeDashboard />} />
        <Route path="/super-dashboard" element={<SuperDashboard />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
