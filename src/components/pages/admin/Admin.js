import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../../configuration/config';
import { Link } from "react-router-dom";
import '../../dist/admin.css'

function Admin() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = function (event) {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = async function (event) {
    event.preventDefault();
    setIsUploading(true);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(`${BASE_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setMessage(response.data);
      setFile(null);
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
          <label htmlFor="image">Choose Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
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
