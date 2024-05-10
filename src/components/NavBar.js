// import bootstrap.bundle.min.js;
import logImage from '../components/dist/log.jpeg';
import './dist/Nav.css'


const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-light navbar-expand-lg bg-light fixed-top">
                <div className="container-fluid py-3">
                    {/* <a className="navbar-brand" href="#">Offcanvas dark navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-start pt-2 flex-grow-1">
                                <li className="nav-item px-3">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link" href="/Gallery">Gallery</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link" href="nav-link">Contact</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav justify-content-end ">
                                {/* <li>
                                    <img src={logImage} alt="Log" className="small-img" />
                                </li> */}
                                <h1 className='text-dark px-5' style={{ fontFamily: 'Dancing Script, cursive' }}>stories of ragooty</h1>
                            </ul>

                            {/* <button>Sign up</button> */}
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar;