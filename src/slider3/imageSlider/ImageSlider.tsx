import "./imageSlider.css";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import { useState } from "react";

interface CarData {
  url: string;
  alt: string;
}
interface ImageSliderProps {
  imageUrls: CarData[];
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

  const moveImage = (event: any) => {
    // if up`
    if (event.deltaY > 0) {
      showPrevImage();
    }
    // if down
    if (event.deltaY < 0) {
      showNextImage();
    }
  };

  return (
    <section aria-label="image slider" className="main">
      <div className="carContainer">
        {imageUrls.map(({ url, alt }, ind) => (
          <img
            key={url}
            className="carsImage"
            aria-hidden={carIndex !== ind}
            src={url}
            alt={alt}
            width="100%"
            style={{ translate: `${-100 * carIndex}%` }}
            onWheel={moveImage}
          />
        ))}
      </div>
      <button
        aria-label="View Previous Image"
        className="sliderBtn leftBtn"
        onClick={showPrevImage}
      >
        <ArrowBigLeft aria-hidden />{" "}
      </button>
      <button
        aria-label="View Next Image"
        className="sliderBtn rightBtn"
        onClick={showNextImage}
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div className="carIndex">
        {imageUrls.map(({ url }, index) => (
          <button
            key={url}
            onClick={() => setCarIndex(index)}
            className="carIndexBtn"
            aria-label={`View Image ${index + 1}`}
          >
            {index === carIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
