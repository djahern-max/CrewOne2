import React from "react";
import logo from "./1.webp"; // Adjust the path as needed
import "./Logo.css";

const Logo = () => (
  <div>
    <img src={logo} alt="Logo" className="logo-image" />
  </div>
);

export default Logo;
