import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../layouts/Sidebar";
import "../../styles.css";

const OfficeDashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/upload-csv",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("File uploaded and processed successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    }
  };

  const handleItemClicked = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="container">
      <Sidebar onItemClicked={handleItemClicked} />
      <div className="content">
        {selectedItem ? (
          <div>
            <h2>{selectedItem.name}</h2>
            {selectedItem.path === "/office-dashboard/upload-csv" && (
              <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload CSV</button>
              </form>
            )}
            {selectedItem.path === "/office-dashboard/item-2" && (
              <div>
                <p>This is the content for Item 2.</p>
              </div>
            )}
            {selectedItem.path === "/office-dashboard/item-3" && (
              <div>
                <p>This is the content for Item 3.</p>
              </div>
            )}
          </div>
        ) : (
          <p>Please select an item from the sidebar.</p>
        )}
      </div>
    </div>
  );
};

export default OfficeDashboard;
