import React, { useState, useEffect } from "react";
import axios from "axios";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import BASE_URL from "../../configuration/config";
import { GET_IMAGES_BY_CATEGORY, GET_IMAGE_BY_ID } from "../../configuration/config";
import "../dist/Gallery.css";
import { Transition } from "framer-motion";
import NavBar from "../NavBar";

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const homeResponse = await axios.get(`${GET_IMAGES_BY_CATEGORY}/home`);
            const travelResponse = await axios.get(`${GET_IMAGES_BY_CATEGORY}/travel`);
            const commercialResponse = await axios.get(`${GET_IMAGES_BY_CATEGORY}/commercial`);
            const lifeOnStreetsResponse = await axios.get(`${GET_IMAGES_BY_CATEGORY}/lifeonstreets`);

            const homeImages = homeResponse.data.map(image => ({
                ...image,
                category: 'home'
            }));
            const travelImages = travelResponse.data.map(image => ({
                ...image,
                category: 'travel'
            }));
            const commercialImages = commercialResponse.data.map(image => ({
                ...image,
                category: 'commercial'
            }));
            const lifeOnStreetsImages = lifeOnStreetsResponse.data.map(image => ({
                ...image,
                category: 'lifeonstreets'
            }));

            const allImages = [...homeImages, ...travelImages, ...commercialImages, ...lifeOnStreetsImages];
            setImages(allImages);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    const renderImagesByCategory = (category) => {
        const maxImagesToShow = 6; // Change this number to limit the number of images shown for each category
        const categoryImages = images.filter(image => image.category === category).slice(0, maxImagesToShow);


        const handleClick = () => {
            console.log(`Clicked on ${category}`);
        };

        return (
            <div className="category-container pt-5" onClick={handleClick}>
                <h2>{category.toUpperCase()}</h2>
                <div className="gallery-container">
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                    >
                        {categoryImages.map(image => (
                            <a key={image.id}>
                                <img
                                    src={`${GET_IMAGE_BY_ID}/${image.id}`}
                                    alt={image.name}
                                    className="gallery-image"
                                />
                            </a>
                        ))}
                    </LightGallery>
                </div>
            </div>
        );
    };

    return (
        <div className="App">
            <NavBar />
            <header>
                <h1 className="text-center">stories of ragooty</h1>
            </header>
            <div className="gallery-container">
                {renderImagesByCategory('home')}
                {renderImagesByCategory('travel')}
                {renderImagesByCategory('commercial')}
                {renderImagesByCategory('lifeonstreets')}
            </div>
        </div>
    );
}

export default Gallery;
