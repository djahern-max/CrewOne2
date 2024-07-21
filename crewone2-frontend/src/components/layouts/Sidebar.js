import React from "react";
import { Link } from "react-router-dom";
import "../../styles.css";

const Sidebar = ({ onItemClicked }) => {
  const items = [
    { name: "Upload CSV", path: "/office-dashboard/upload-csv" },
    { name: "Item 2", path: "/office-dashboard/item-2" },
    { name: "Item 3", path: "/office-dashboard/item-3" },
  ];

  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <button key={index} onClick={() => onItemClicked(item)}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
