import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../../../configuration/config';

function Image() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  const fetchImages = async function () {
    try {
      const response = await axios.get(`${BASE_URL}/images`);
      setImages(response.data);
    } catch (error) {
      setError('Error fetching images: ' + error.message);
    }
  };

  useEffect(function () {
    fetchImages();
  }, []);

  const handleDelete = async function (id) {
    try {
      await axios.delete(`${BASE_URL}/image/${id}`);
      // After deleting the image, fetch the updated list of images
      fetchImages();
    } catch (error) {
      setError('Error deleting image: ' + error.message);
    }
  };

  return (
    React.createElement("div", null,
      React.createElement("div", { className: "Delimages-container" },
        error && React.createElement("p", null, error),
        images.map(function (image) {
          return (
            React.createElement("div", { key: image.id, className: "delimage" },
              React.createElement("img", { src: `${BASE_URL}/image/${image.id}`, alt: image.name }),
              React.createElement("button", { onClick: function () { return handleDelete(image.id); } }, "Delete")
            )
          );
        })
      )
    )
  );
}

export default Image;
