import React, { useEffect } from "react";
import "./Preloader.css";

function Preloader() {
  useEffect(() => {
    const preloader = document.querySelector(".preloader");
    const hidePreloader = () => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    };
    setTimeout(hidePreloader, 3000);

    // Cleanup function
    return () => clearTimeout(hidePreloader);
  }, []);

  return (
    <div className="preloader">
      <div className="spinner_wrap">
        <div className="spinner" />
      </div>
    </div>
  );
}

export default Preloader;
