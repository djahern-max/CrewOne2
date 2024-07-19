import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Ensure you import the styles

const Home = () => {
  return (
    <div>
      <h2>Welcome to CrewOne2</h2>
      <p className="message">
        <Link to="/login" className="link">
          Login
        </Link>{" "}
        or{" "}
        <Link to="/register" className="link">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Home;
