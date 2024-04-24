import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { GET_IMAGES_BY_CATEGORY, GET_IMAGE_BY_ID } from "../../configuration/config";
import "../dist/Gallery.css";
import NavBar from "../NavBar";

function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get(`${GET_IMAGES_BY_CATEGORY}/home`); 
            setImages(response.data); 
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    return (
        <>
            <NavBar /> 
            <div className="gallery-container" style={{ marginTop: '80px' }}>
                {images.map(image => (
                    <img 
                        key={image.id} 
                        src={`${GET_IMAGE_BY_ID}/${image.id}`} 
                        alt={image.name} 
                        className="gallery-image"
                    />
                ))}
            </div>
        </>
    )
}

export default Gallery;
