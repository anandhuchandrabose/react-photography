import React from "react";
import Typewriter from "typewriter-effect";
import Preloader from "./components/Preloader/Preloader";
import "./styles.css";
// import LinkTree from "../LinkTree/LinkTree";

function ComingSoon() {
  const redirectToInstagram = () => {
    window.location.href = "https://www.instagram.com/ragooty_sasidharan";
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center container vh-100">
      <div className="text-center">
        <h1 className="h11">
          <Typewriter
            options={{
              strings: ["Launching Soon..."],
              autoStart: true,
              loop: true
            }}
          />
        </h1>
        <div className="container-fluid mt-5">
        <Link to="/LinkTree">
            <button className="button1">CONTACT</button>
          </Link>
        </div>
        <div className="container-fluid mt-4">
          <button className="button1">Deheedeham photography exhibition, Kochi</button>
        </div>

        <Preloader />
      </div>
    </div>
  );
}

export default ComingSoon;
