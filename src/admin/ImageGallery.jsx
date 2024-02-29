import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css'; 
import BASE_URL from './config';

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all images from the server when the component mounts
    async function fetchImages() {
      try {
        const response = await axios.get(`${BASE_URL}/images`);
        setImages(response.data);
      } catch (error) {
        setError('Error fetching images: ' + error.message);
      }
    }

    fetchImages();
  }, []);

  return (
    <div className="Images-container">
      <h2>Image Gallery</h2>
      {error && <p>{error}</p>}

        {images.map((image) => (
          <div key={image.id} className="image">
            <img src={`${BASE_URL}/image/${image.id}`} alt={image.name} />
          </div>
        ))}
    </div>
  );
}

export default ImageGallery;
