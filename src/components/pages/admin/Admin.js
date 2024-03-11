import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../../configuration/config';
import { Link } from "react-router-dom";
import '../../dist/admin.css'

function Admin() {
  const [files, setFiles] = useState(null);
  const [message, setMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = function (event) {
    setFiles(event.target.files);
  };

  const handleFormSubmit = async function (event) {
    event.preventDefault();
    setIsUploading(true);

    const formData = new FormData();
    for (const file of files) {
      formData.append('images', file);
    }

    try {
      const response = await axios.post(`${BASE_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setMessage(response.data);
      setFiles(null);
      setIsUploading(false);
    } catch (error) {
      setMessage('Error uploading image: ' + error.message);
      setIsUploading(false);
    }
  };

  return (
    <div className='admin'>
      <div className="admin-container">
        <h1 className="title">Admin Panel - Upload Image</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="images">Choose Images:</label>
            <input
              type="file"
              id="images"
              accept="image/*"
              onChange={handleFileChange}
              multiple
              required
            />
          </div>
          <button type="submit" className={isUploading ? "uploading" : ""}>
            {isUploading ? "Uploading..." : "Upload"}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
        <Link to="/Image" className="show-images-link">Show All Images</Link>
      </div>
    </div>
  );
}

export default Admin;
