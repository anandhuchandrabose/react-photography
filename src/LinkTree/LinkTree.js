// import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from "react";
import "./LinkTree.css"


const ExpandingCard = ({ expanded }) => {

    return (
        // <div className={`card text-center d-flex-column ${expanded ? 'expanded' : ''}`} id='dehebtn'>
        //     {/* <h5 style={{ opacity: expanded ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}><br /></h5> */}
        //     <div className="expandable-content text-center">
        //         <h5 id='h55' style={{ opacity: expanded ? 1 : 0, transition: 'opacity 1.3s ease-in-out' }}>Deheedeham</h5>
        //         <p style={{ opacity: expanded ? 1 : 0, transition: 'opacity 1.3s ease-in-out' }}>"when life becomes its own body"
        //             <br /> <p className='eventvenue' style={{ opacity: expanded ? 1 : 0, transition: 'opacity 2.3s ease-in-out' }}>Photography exhibition,kochi <br /></p>
        //         </p>

        //     </div>
        // </div>
        <a href='/deheedeham'>
            <div class=" usa-grid">
                <h1 id="cheese">NEW EVENT</h1>
                {/* <h1 class="title">Grace Hopper Day</h1> */}
                <h5 class="title text-center" id='h55' style={{ opacity: expanded ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>Deheedeham</h5>
                {/* <h1 class="title" id="sauce">Hackathon</h1> */}
                <p className="title text-center" id="sauce" style={{ opacity: expanded ? 1 : 0, transition: 'opacity 1.3s ease-in-out' }}>when life becomes its own body</p>
                <p className="title text-center" id="sauce1" style={{ opacity: expanded ? 1 : 0, transition: 'opacity 1.3s ease-in-out' }}>Photography Exhibition,Kochi. know More</p>

                {/* <h1 id="cheese1">Know More</h1> */}
            </div>
        </a>
    );
}
{/* <p className='eventvenue' style={{ opacity: expanded ? 1 : 0, transition: 'opacity 2.3s ease-in-out' }}>Photography exhibition,kochi <br /></p> */ }

const LinkTree = () => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExpanded(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);



    return (
        <>

            <div className="container-fluid">
                <div className="container vh-100 d-flex flex-column align-items-center justify-content-center">


                    <img src="./111.jpeg" alt="" className="circle-image p-1 shadow" />


                    <h1 className='mt-3'>Ragooty</h1>
                    <h3 className='mb-4 h33'>Photographer</h3>

                    <ExpandingCard expanded={expanded} />
                    {/* <a href='/deheedeham' style={{ opacity: expanded ? 1 : 0, transition: 'opacity 1.3s ease-in-out' }}> click here to know more
                    </a> */}

                    <div class="card m-3" id="card5" >
                        <a class="socialContainer containerOne" href="https://www.instagram.com/ragooty_sasidharan">
                            <svg viewBox="0 0 16 16" class="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
                        </a>

                        <a class="socialContainer containerTwo" href="mailto:storiesofragooty@gmail.com">
                            <svg viewBox="0 0 24 24" class="socialSvg gmailsvg">
                                <path d="M 4 4 C 2.895 4 2 4.895 2 6 L 2 18 C 2 19.105 2.895 20 4 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 6 C 22 4.895 21.105 4 20 4 L 4 4 z M 5.5976562 6 L 18.402344 6 L 12 10 L 5.5976562 6 z M 5 8.6269531 L 12 13 L 19 8.6269531 L 19 18 L 5 18 L 5 8.6269531 z"></path>
                            </svg>             </a>

                        <a class="socialContainer containerThree" href="https://www.facebook.com/profile.php?id=100008807614921&mibextid=LQQJ4d">
                            <svg viewBox="0 0 24 24" class="socialSvg fbSvg">
                                <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                            </svg>
                        </a>

                        <a class="socialContainer containerFour" href="#">
                            <svg viewBox="0 0 24 24" class="socialSvg behanceSvg">
                                <path d="M 5 3 C 3.898438 3 3 3.898438 3 5 L 3 19 C 3 20.101563 3.898438 21 5 21 L 19 21 C 20.101563 21 21 20.101563 21 19 L 21 5 C 21 3.898438 20.101563 3 19 3 Z M 6.40625 7.6875 L 9 7.6875 C 11.300781 7.6875 11.6875 9.101563 11.6875 10 C 11.6875 11.300781 10.792969 11.710938 10.59375 11.8125 C 10.792969 11.914063 11.8125 12.1875 11.8125 13.6875 C 11.914063 15.488281 10.789063 16.1875 9.1875 16.1875 L 6.40625 16.1875 Z M 13.40625 7.6875 L 17.09375 7.6875 L 17.09375 8.6875 L 13.40625 8.6875 Z M 8.09375 9.09375 L 8.09375 11.1875 L 9 11.1875 C 9.601563 11.1875 10 10.988281 10 10.1875 C 10 9.488281 9.699219 9.09375 9 9.09375 Z M 15.59375 9.8125 C 16.992188 9.8125 18 10.605469 18 12.90625 L 18 13.59375 L 14.59375 13.59375 C 14.59375 13.894531 14.613281 15 15.8125 15 C 16.613281 15 16.988281 14.605469 17.1875 14.40625 L 17.90625 15.40625 C 17.804688 15.507813 17.113281 16.3125 15.8125 16.3125 C 14.3125 16.3125 13.09375 15.507813 13.09375 13.40625 L 13.09375 12.90625 C 13.09375 10.605469 14.292969 9.8125 15.59375 9.8125 Z M 15.40625 11.09375 C 15.105469 11.09375 14.5 11.207031 14.5 12.40625 L 16.1875 12.40625 C 16.1875 12.40625 16.40625 11.09375 15.40625 11.09375 Z M 8.09375 12.5 L 8.09375 14.8125 L 9.1875 14.8125 C 9.789063 14.8125 10.09375 14.386719 10.09375 13.6875 C 10.195313 12.886719 9.914063 12.5 9.3125 12.5 Z"></path>
                            </svg>
                        </a>
                    </div>




                    {/* <div class="d-grid gap-2 mt-5">
                        <button class="btn btn-light mb-2" type="button">Contact</button>
                        <button class="btn btn-light" type="button">website</button>
                    </div> */}

                    <a href="https://www.storiesofragooty.com/">
                        <button className='button1 mt-3'>website</button>
                    </a>
                    {/* <a href="https://wa.me/916238248775">
                        <button className='button1 mt-3 mb-3'>contact us!</button>
                    </a> */}
                    <a href="tel:+918075255527">
                        <button className='button1 mt-3 mb-3'>Contact Us!</button>
                    </a>

                    <a href="#" class="btn-shine"> <p className=''> ©storiesofragooty</p></a>

                    {/* <p className='copyright'></p> */}
                </div>


            </div>
        </>
    );


};

export default LinkTree;