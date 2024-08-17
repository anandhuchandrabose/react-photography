import React, { useState, useEffect, memo } from "react";
import axios from "axios";
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import { GET_IMAGES_BY_CATEGORY, GET_IMAGE_BY_ID } from "../../configuration/config";
import NavBar from "../NavBar";
import Footer from "../Footer";
import "../dist/Gallery.css";

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const categories = ['fineart', 'travel', 'commercial', 'lifeonstreets', 'kids'];
            const imagePromises = categories.map(category =>
                axios.get(`${GET_IMAGES_BY_CATEGORY}/${category}`)
            );
            const responses = await Promise.all(imagePromises);

            const allImages = responses.flatMap((response, index) => 
                response.data.map(image => ({
                    ...image,
                    category: categories[index]
                }))
            );
            setImages(allImages);
        } catch (error) {
            console.error("Error fetching images:", error);
        } finally {
            setLoading(false);
        }
    };

    const renderImagesByCategory = (category) => {
        const maxImagesToShow = 0;
        const categoryImages = images.filter(image => image.category === category).slice(0, maxImagesToShow);

        return (
            <a href={`/${category}`} key={category} style={{ textDecoration: 'none', color: "black" }}>
                <div className="category-container pt-5" style={{ height: "auto" }}>
                    <h2 className="text-center">{category.toUpperCase()}</h2>
                    <div className="gallery-container">
                        <LightGallery
                            onInit={() => console.log('lightGallery has been initialized')}
                            speed={500}
                            plugins={[lgZoom, lgThumbnail]}
                            options={{ zoom: false }}
                        >
                            {categoryImages.map(image => (
                                <a key={image.id}>
                                    <img
                                        src={`${GET_IMAGE_BY_ID}/${image.id}`}
                                        alt={image.name}
                                        className="gallery-image"
                                        loading="lazy"
                                    />
                                </a>
                            ))}
                        </LightGallery>
                    </div>
                </div>
            </a>
        );
    };

    return (
        <div className="App">
            <NavBar />
            {loading ? (
                <div className="loading-state">Loading...</div>
            ) : (
                <div className="gallery-container">
                    {['fineart', 'travel', 'commercial', 'lifeonstreets', 'kids'].map(renderImagesByCategory)}
                </div>
            )}
            {/* <Footer /> */}
        </div>
    );
}

export default memo(Gallery);
