import React, { useState, useEffect } from "react";
import "./Deheedeham.css"

const ExpandingCard = ({ expanded }) => {
    return (
        <div className={`card text-center d-flex-column ${expanded ? 'expanded' : ''}`}>
            {/* <h5 style={{ opacity: expanded ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}><br /></h5> */}
            <div className="expandable-content text-center">
                <h1 className="dd_header" style={{ opacity: expanded ? 1 : 0, transition: 'opacity 1.3s ease-in-out' }}>DEHEEDHEHAM</h1>
                <h4 style={{ opacity: expanded ? 1 : 0, transition: 'opacity 1.3s ease-in-out' }}>when life becomes its own body
                    <br /> <br /> <h5 className='eventvenue' style={{ opacity: expanded ? 1 : 0, transition: 'opacity 1.3s ease-in-out' }}>Photography exhibition by Ragooty </h5>
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
                        <img src="./desk-banner.jpg" alt="" className="p-1 shadow banner-image img-fluid d-none d-lg-block" style={{ opacity: expanded ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }} />
                        <img src="./mob-banner.jpg" alt="" className="p-1 shadow banner-image img-fluid d-lg-none" style={{ opacity: expanded ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }} />
                    </div>
                </div>
                <div className="par text-center px-1 container-fluid" style={{ opacity: expanded ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}><p>The mind and body is known to coexist and respond mutually, body being the perishable physical vessel for the soul to experience the world. These photographs are visual representation of body being the equally expressive medium of one's life, just like the soul.</p></div>
            </div>
        </div>
    );
};

export default Deheedeham;
