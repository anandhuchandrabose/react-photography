// Admin.jsx
import React, { useState } from 'react';
import axios from 'axios';
import BASE_URL from './config';

function Admin() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
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

  const handleShowGallery = () => {
    window.location.href = "image.html";
  };

  return (
    <div>
      <h1>Admin Panel - Upload Image</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="image">Choose Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*" 
            onChange={handleFileChange}
            required 
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={handleShowGallery}>Show All Images</button>
    </div>
  );
}

export default Admin;
