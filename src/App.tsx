import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "./data";
import "yet-another-react-lightbox/styles.css";
import {
  // Captions,
  Download,
  Fullscreen,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Images from "./Images";

function App() {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  return (
    <>
      {/* <button onClick={() => setOpen(true)}>open Lightbox</button> */}
      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />
      <Lightbox
        plugins={[Download, Fullscreen, Thumbnails]}
        // captions={{
        //   showToggle: true,
        //   descriptionTextAlign: "center",
        // }}
        // open={open}
        // close={() => setOpen(false)}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}

export default App;
