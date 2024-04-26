import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images1, CustomImage } from "./images1.js";

const slides = images1.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const Photo = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number, item: CustomImage) => setIndex(index);

  return (
    <div>
      <Gallery
        images={images1}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
  
export default Photo
