import React from "react";
import "../styles.css";
// import logo from "../images/logo2.webp";
import Logo from "./Logo/Logo";

const Home = () => {
  return (
    <div className="container_home">
      <Logo />
      <h1>Welcome to CrewOne2</h1>
      <p>Please register or login to continue</p>
      <div className="message">
        <a href="/register">Register</a> | <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Home;
