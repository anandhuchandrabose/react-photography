import React, { useState, useEffect } from "react";
import "./LinkTree.css";

const ExpandingCard = ({ expanded }) => {
    return (
        <div className={`card text-center d-flex-column ${expanded ? 'expanded' : ''}`}>
            {/* <h5 style={{ opacity: expanded ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}><br /></h5> */}
            <div className="expandable-content text-center">
                <h1 style={{ opacity: expanded ? 1 : 0, transition: 'opacity 1.3s ease-in-out' }}>Deheedeham</h1>
                <h4 style={{ opacity: expanded ? 1 : 0, transition: 'opacity 1.3s ease-in-out' }}>"When life becomes its own body"
                    <br /> <h5 className='eventvenue' style={{ opacity: expanded ? 1 : 0, transition: 'opacity 1.3s ease-in-out' }}>Photography exhibition, Kochi <br />click here to know more</h5>
                </h4>
            </div>
        </div>
    );
}

const Deheedeham = () => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExpanded(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container-fluid bg-light d-flex align-items-center justify-content-center">
            <div className="container py-5">
            <div className="container d-flex flex-column align-items-center justify-content-center mb-4">
                    {/* <div className="col-lg-8 text-center mb-4"> */}
                        <ExpandingCard expanded={expanded} />
                    {/* </div> */}
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <img src="./desk-banner.jpg" alt="" className="p-1 shadow banner-image img-fluid d-none d-lg-block" />
                        <img src="./mob-banner.jpg" alt="" className="p-1 shadow banner-image img-fluid d-lg-none" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deheedeham;
