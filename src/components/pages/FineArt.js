import React, { useState, useEffect } from "react";
import axios from "axios";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { GET_IMAGES_BY_CATEGORY, GET_IMAGE_BY_ID } from "../../configuration/config";
import "../dist/Gallery.css";
import NavBar from "../NavBar";
import Footer from "../Footer";

function FineArt() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchImages();
        document.addEventListener("contextmenu", (event) => {
            event.preventDefault();
        });
    }, []);

    const fetchImages = async () => {
        try {
            const response = await axios.get(`${GET_IMAGES_BY_CATEGORY}/fineart`);
            setImages(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching images:", error);
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <NavBar />
            <div id="gallery-container">
                <LightGallery
                    onInit={() => console.log('lightGallery has been initialized')}
                    speed={500}
                    download={false} 
                    addClass='no-desc' 
                >
                    {loading ? (
                        <div className="skeleton-grid">
                            {Array.from({ length: 8 }).map((_, index) => (
                                <div key={index} className="skeleton-item">
                                    <Skeleton width={300} height={200} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        images.map(image => (
                            <a key={image.id} href={`${GET_IMAGE_BY_ID}/${image.id}`}>
                                <img
                                    src={`${GET_IMAGE_BY_ID}/${image.id}`}
                                    className="gallery-image"
                                    loading="lazy"
                                />
                            </a>
                        ))
                    )}
                </LightGallery>
            </div>
            <Footer />
        </div>
    );
}

export default FineArt;
