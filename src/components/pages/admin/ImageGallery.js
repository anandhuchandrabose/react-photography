import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DELETE_IMAGE_BY_ID, GET_ALL_IMAGE, GET_IMAGES_BY_CATEGORY, GET_IMAGE_BY_ID } from '../../../configuration/config';

function Image() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  const fetchImages = async function () {
    try {
      const response = await axios.get(`${GET_ALL_IMAGE}`);
      setImages(response.data);
    } catch (error) {
      setError('Error fetching images: ' + error.message);
    }
  };

  useEffect(function () {
    fetchImages();
  }, []);

  const handleDelete = async function (order_id) {
    try {
      await axios.delete(`${DELETE_IMAGE_BY_ID}/${order_id}`);
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
              React.createElement("img", { src: `${GET_IMAGE_BY_ID}/${image.id}`, alt: image.name }),
              React.createElement("button", { onClick: function () { return handleDelete(image.id); } }, "Delete")
            )
          );
        })
      )
    )
  );
}

export default Image;
