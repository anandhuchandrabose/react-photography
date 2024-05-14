import React, { useState, useEffect } from "react";
import axios from "axios";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import BASE_URL from "../../configuration/config";
import { GET_IMAGES_BY_CATEGORY, GET_IMAGE_BY_ID } from "../../configuration/config";
import "../dist/Gallery.css";
// import { Transition } from "framer-motion";
import NavBar from "../NavBar";
import Footer from "../Footer";


function Home() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

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


            <div className="App">
                <NavBar />
                {/* <header>
                    <h1 className="text-center pt-3">stories of ragooty</h1>
                </header> */}
                <a href="#" style={{ pointerevents: "none" }}>
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                    >
                        {images.map(image => (
                            <a key={image.id}>
                                <img
                                    src={`${GET_IMAGE_BY_ID}/${image.id}`}
                                    alt={image.name}
                                    className="gallery-image"
                                />
                            </a>
                        ))}
                    </LightGallery>
                </a>
            </div>
            <Footer/>
                    </>
    );
}

export default Home;
