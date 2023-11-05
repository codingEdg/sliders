import "./imageSlider.css";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import { useState } from "react";

interface ImageSliderProps {
  imageUrls: string[];
}

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [carIndex, setCarIndex] = useState(0);

  const showPrevImage = () => {
    setCarIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };
  const showNextImage = () => {
    setCarIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <div className="main">
      <div className="carContainer">
        {imageUrls.map((url) => (
          <img
            key={url}
            className="carsImage"
            src={url}
            alt="cars"
            width="100%"
            style={{ translate: `${-100 * carIndex}%` }}
          />
        ))}
      </div>
      <button className="sliderBtn leftBtn" onClick={showPrevImage}>
        <ArrowBigLeft />{" "}
      </button>
      <button className="sliderBtn rightBtn" onClick={showNextImage}>
        <ArrowBigRight />
      </button>
      <div className="carIndex">
        {imageUrls.map((url, index) => (
          <button
            key={url}
            onClick={() => setCarIndex(index)}
            className="carIndexBtn"
          >
            {index === carIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
