import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Ensure this path is correct

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to CrewOne2</h1>
      <p className="message">
        <Link to="/register" className="link">
          Register
        </Link>{" "}
        or{" "}
        <Link to="/login" className="link">
          Login
        </Link>{" "}
        to continue.
      </p>
    </div>
  );
};

export default Home;
