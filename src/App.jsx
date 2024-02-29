import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "./data";
import "yet-another-react-lightbox/styles.css";
import { Download, Fullscreen, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "./Images";

function App() {
  const [index, setIndex] = useState(-1);
  const handleAddImage = () => {
    window.location.href = "admin.html";
  };
  return (
    <>
      <button onClick={handleAddImage}>Add Image</button>
      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />
      <Lightbox
        plugins={[Download, Fullscreen, Thumbnails]}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}

export default App;
