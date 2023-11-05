import "./imageSlider.css";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
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
      <img
        className="carsImage"
        src={imageUrls[carIndex]}
        alt="cars"
        width="100%"
      />
      <button className="sliderBtn leftBtn" onClick={showPrevImage}>
        <ArrowBigLeft />{" "}
      </button>
      <button className="sliderBtn rightBtn" onClick={showNextImage}>
        <ArrowBigRight />
      </button>
    </div>
  );
};

export default ImageSlider;
