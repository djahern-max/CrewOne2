import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login"; // Corrected the import statement
import Home from "./components/Home";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>CrewOne2</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
  );
};

const NoMatch = () => {
  return <h2>404 Not Found</h2>;
};

export default App;
