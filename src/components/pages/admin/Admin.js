import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../../../configuration/config';
import { Link } from "react-router-dom";
import '../../dist/admin.css'
import NavBar from '../../NavBar';

function Admin() {
  const [files, setFiles] = useState(null);
  const [category, setCategory] = useState('home'); 
  const [message, setMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = function (event) {
    setFiles(event.target.files);
  };

  const handleCategoryChange = function (event) {
    setCategory(event.target.value);
  };

  const handleFormSubmit = async function (event) {
    event.preventDefault();
    const confirmed = window.confirm('Are you sure you want to upload the images?'); 
    if (!confirmed) {
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    for (const file of files) {
      formData.append('images', file);
    }
    formData.append('category', category); 

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
      if (error.response) {
        setMessage('Error: ' + error.response.data);
      } else if (error.request) {
        setMessage('Error: No response received from server.');
      } else {
        setMessage('Error: ' + error.message);
      }
      setIsUploading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className='admin'>
        <div className="admin-container">

          <form onSubmit={handleFormSubmit} className='form p-4'>
            <h1 className="title">Admin Panel - Upload Image</h1>
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
            <div className="form-group">
              <label htmlFor="category">Select Category:</label>
              <select id="category" value={category} onChange={handleCategoryChange}>
                <option value="home">Home</option>
                <option value="black&white">Black & White</option>
                <option value="portrait">Portrait</option>
                <option value="landscape">Landscape</option>
              </select>
            </div>
            <button type="submit" className={isUploading ? "uploading" : ""}>
              {isUploading ? "Uploading..." : "Upload"}
            </button>
            <Link to="/Image" className="show-images-link">Show All Images</Link>
          </form>
          {message && <p className="message">{message}</p>}

        </div>
      </div>
    </>
  );
}

export default Admin;
