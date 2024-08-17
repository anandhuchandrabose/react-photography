import React, { useEffect, useRef } from 'react';
import './dist/Nav.css';

const NavBar = ({ openGalleryDropdown }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (window.innerWidth <= 768 && dropdownRef.current) {
            dropdownRef.current.classList.add('show'); // Keep dropdown open on mobile
            dropdownRef.current.setAttribute('aria-expanded', 'true');
        }

        if (openGalleryDropdown && dropdownRef.current) {
            dropdownRef.current.click();
        }
    }, [openGalleryDropdown]);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid pb-1">
                <div className="d-flex justify-content-between w-100">
                    <div className="col">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-start navlinks flex-grow-1">
                                    <li className="nav-item px-3">
                                        <a className="nav-link" aria-current="page" href="/" style={{ color: 'black' }}>Home</a>
                                    </li>
                                    <li className="nav-item dropdown px-3">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="/gallery"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            style={{ color: 'black' }}
                                            ref={dropdownRef}
                                        >
                                            Gallery
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="/FineArt">Fine Art</a></li>
                                            <li><a className="dropdown-item" href="/Travel">Travel</a></li>
                                            <li><a className="dropdown-item" href="/Commercial">Commercial</a></li>
                                            <li><a className="dropdown-item" href="/LifeOnStreets">Life on Streets</a></li>
                                            <li><a className="dropdown-item" href="/Kids">Kids</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item px-3">
                                        <a className="nav-link" href="/contact" style={{ color: 'black' }}>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col text-end">
                        <h1 className='text-dark hd1 pt-2'>stories of ragooty</h1>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
