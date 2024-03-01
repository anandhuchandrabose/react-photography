import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../index.css'; 
import BASE_URL from '../config';
import Header from './Header'; 

function Image() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/images`);
      setImages(response.data);
    } catch (error) {
      setError('Error fetching images: ' + error.message);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/image/${id}`);
      // After deleting the image, fetch the updated list of images
      fetchImages();
    } catch (error) {
      setError('Error deleting image: ' + error.message);
    }
  };

  return (
    <div>
      <Header /> {/* Include the Header component */}
      <div className="Images-container">
        {error && <p>{error}</p>}
        {images.map((image) => (
          <div key={image.id} className="delimage">
            <img src={`${BASE_URL}/image/${image.id}`} alt={image.name} />
            {/* Add delete button here */}
    
            <button onClick={() => handleDelete(image.id)}>Delete</button>
   
          </div>
        ))}
      </div>
    </div>
  );
}

export default Image;