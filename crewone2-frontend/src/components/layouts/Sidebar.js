import React from "react";
import { Link } from "react-router-dom";
import "../../styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Office Dashboard</h2>
      <Link to="/office-dashboard/upload-csv">Upload CSV</Link>
      {/* Add more navigation links as needed */}
    </div>
  );
};

export default Sidebar;
