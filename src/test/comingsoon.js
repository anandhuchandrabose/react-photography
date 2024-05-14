import React from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Preloader from "./components/Preloader/Preloader";
import "../LinkTree/LinkTree.css"

function ComingSoon() {
    const navigate = useNavigate();
    const redirectToContact = () => {
        navigate('/contact')
    };

    const redirectToDeheedeham = () => {
        navigate('/deheedeham')
    };
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <h1 className="display-4">
                    <Typewriter
                        options={{
                        
                            strings: ["Launching Soon..."],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </h1>
                <div className="container mt-5">
                    <button className="button1 btn-primary btn-lg" onClick={redirectToContact}>CONTACT</button>
                </div>
                <div className="container mt-4">
                    <button className="button1 btn-outline-primary btn-lg" onClick={redirectToDeheedeham}>Deheedeham photography exhibition, Kochi</button>
                </div>
                <Preloader />
            </div>
        </div>
    );
}

export default ComingSoon;