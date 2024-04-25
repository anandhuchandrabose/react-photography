// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import LightGallery from 'lightgallery/react';
// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';
// import BASE_URL from "../../configuration/config";
// import NavBar from "../NavBar";


// function Home() {
//     const onInit = () => {
//         console.log('lightGallery has been initialized');
//     };

//     const [images, setImages] = useState([]);

//     useEffect(() => {
//         fetchImages();
//     }, []);

//     const fetchImages = async () => {
//         try {
//             const response = await axios.get(`${BASE_URL}/images/home`);
//             setImages(response.data);
//         } catch (error) {
//             console.error("Error fetching images:", error);
//         }
//     };

//     return (
//         <>
//             <NavBar />
//             <header>
//                 <h1 className="text-center">hello</h1>
//             </header>
//             {/* <div className="App">
//                 <LightGallery
//                     onInit={onInit}
//                     speed={500}
//                 >
//                     {images.map(image => (
//                         <a key={image.id}>
//                             <img
//                                 src={`${BASE_URL}/image/${image.id}`}
//                                 alt={image.name}
//                                 className="gallery-image"
//                             />
//                         </a>
//                     ))}
//                 </LightGallery>
//             </div> */}
//         </>
//     );
// }

// export default Home;
