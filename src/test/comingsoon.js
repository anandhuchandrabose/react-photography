import React from "react";
import Typewriter from "typewriter-effect";
import Preloader from "./components/Preloader/Preloader";
import "./styles.css";

function ComingSoon() {
  const redirectToInstagram = () => {
    window.location.href = "https://www.instagram.com/ragooty_sasidharan";
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1>
          <Typewriter
            options={{
              strings: ["Launching Soon..."],
              autoStart: true,
              loop: true
            }}
          />
        </h1>
        <div className="container-fluid mt-5">
          <button onClick={redirectToInstagram}>CONTACT</button>
        </div>
        <div className="container-fluid mt-4">
          <button>Deheedeham photography exhibition, Kochi</button>
        </div>
        
        <Preloader />
      </div>
    </div>
  );
}

export default ComingSoon;
