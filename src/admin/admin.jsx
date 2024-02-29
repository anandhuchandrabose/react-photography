import React, { useState } from 'react';
import axios from 'axios'; 

const BASE_URL = 'http://localhost:3000'; // Change this to your server's base URL


function Admin() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    // Update the state with the selected file
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('image', file); // 'image' should match the field name in your Express route

    try {
      // Send a POST request to your Express server to upload the image
      const response = await axios.post(`${BASE_URL}/upload`, formData, { 
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type header for FormData
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
    </div>
  );
}

export default Admin;