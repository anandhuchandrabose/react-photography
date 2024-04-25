import React, { useEffect } from 'react';
import anime from 'animejs';
import '../dist/style.css';
import images from '../img/tst.jpg';
// import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


function Splash() {
    useEffect(() => {

        const textWrapper = document.querySelector('.ml2');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({ loop: true })
            .add({
                targets: '.ml2 .letter',
                scale: [4, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => 200 * i
            }).add({
                targets: '.ml2',
                opacity: 100,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 40000
            });

        // Clean up the animation on component unmount
        return () => {
            anime.remove('.ml2 .letter');
            anime.remove('.ml2');
        };
    }, []);

    return (
        <>
            <div className="fullscreen-bg">
                <img src={images} alt="background" className="fullscreen-bg__img" />
                <div className='splash-container'>
                    <div className='splash-item-1'></div>
                    <div className='splash-item-2'>
                        <h1 className="ml2">Sunny mornings</h1>
                    </div>

                    <Link to="/Gallery">
                        <button></button>
                    </Link>
                    <div className='splash-item-3'></div>


                </div>
            </div>
        </>
    );
}

export default Splash; 
