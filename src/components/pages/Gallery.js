import React, { useState, useEffect } from "react";
import axios from "axios"; 
import BASE_URL from "../../configuration/config";
import "../dist/Gallery.css";
import { Transition } from "framer-motion";
import NavBar from "../NavBar";

function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/images/home`); 
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
                        src={`${BASE_URL}/image/${image.id}`} 
                        alt={image.name} 
                        className="gallery-image"
                    />
                ))}
            </div>
        </>
    )
}

export default Gallery;
