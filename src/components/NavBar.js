// import bootstrap.bundle.min.js;
import logImage from '../components/dist/log.jpeg';
import './dist/Nav.css'


const NavBar = () => {
    return (
        <>
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
                                        <li className="nav-item px-3">
                                            <a className="nav-link primary" href="/Gallery" style={{ color: 'black' }}>Gallery</a>
                                        </li>
                                        <li className="nav-item px-3">
                                            <a className="nav-link" href="/contact" style={{ color: 'black' }}>Contact</a>
                                        </li>
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


        </>
    )
}

export default NavBar;