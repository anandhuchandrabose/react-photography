import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../../configuration/config';
import { Link } from "react-router-dom";

function Admin() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const handleFileChange = function (event) {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = async function (event) {
    event.preventDefault();

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('image', file);

    try {
      // Send a POST request to your Express server to upload the image
      const response = await axios.post(`${BASE_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Handle response from server
      setMessage(response.data);
      // Optionally, you can reset the file input after successful upload
      setFile(null);
    } catch (error) {
      // Handle errors
      setMessage('Error uploading image: ' + error.message);
    }
  };

 

  return (
    React.createElement("div", null,
      React.createElement("h1", null, "Admin Panel - Upload Image"),
      React.createElement("form", { onSubmit: handleFormSubmit },
        React.createElement("div", null,
          React.createElement("label", { htmlFor: "image" }, "Choose Image:"),
          React.createElement("input", {
            type: "file",
            id: "image",
            accept: "image/*",
            onChange: handleFileChange,
            required: true
          })
        ),
        React.createElement("button", { type: "submit" }, "Upload")
      ),
      message && React.createElement("p", null, message),
      <Link to="/Image">Show All Images</Link>
    )
  );
}

export default Admin;
