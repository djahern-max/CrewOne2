import React from "react";
import "../styles.css"; // Adjust the path as necessary
import logo from "../images/logo2.webp"; // Adjust the path as necessary

const Home = () => {
  return (
    <div className="container_home">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Welcome to CrewOne2</h1>
      <p>Please register or login to continue</p>
      <div className="message">
        <a href="/register">Register</a> | <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Home;
