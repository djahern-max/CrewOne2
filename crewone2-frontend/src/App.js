import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Home from "./components/Home";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};

const NoMatch = () => {
  return <h2>404 Not Found</h2>;
};

export default App;
