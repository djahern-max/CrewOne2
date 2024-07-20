import React from "react";
import "../styles.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to CrewOne2</h1>
      <p>Please register or login to continue</p>
      <div className="message">
        <a href="/register">Register</a> | <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Home;
