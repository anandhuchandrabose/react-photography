import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Download, Fullscreen, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "../Images";
import BASE_URL from "../../configuration/config";
import "../dist/Gallery.css";
import { Transition } from "framer-motion";
import NavBar from "../NavBar";



function Gallery() {
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await fetch(`${BASE_URL}/images`);
            if (!response.ok) {
                throw new Error("Failed to fetch images");
            }
            const data = await response.json();
            setImages(data);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    const handleImageClick = (clickedIndex) => {
        if (clickedIndex !== index) {
            setIndex(clickedIndex);
        }
        console.log(clickedIndex)
    };

    const handleCloseLightbox = () => {
        setIndex(-1);
    };
    return (
        <>
            <NavBar /> 
            <div style={{ marginTop: '100px' }}>
                <Images data={images} onClick={handleImageClick} />
            </div>
            <Lightbox
                plugins={[Download, Fullscreen, Thumbnails]}
                index={handleImageClick.clickedIndex}
                open={index !== -1}
                close={handleCloseLightbox}
                slides={images.map(image => ({
                    src: `${BASE_URL}/image/${image.id}`,
                    type: 'image'
                }))}
            />
        </>
    )
}

export default Gallery;


