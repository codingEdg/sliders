import "./slider1.css";
import ImageSlider from "./imageSlider/ImageSlider";

interface Slider1Props {
  imageUrls: string[];
}

const Slider1 = ({ imageUrls }: Slider1Props) => {
  return (
    <div>
      <ImageSlider imageUrls={imageUrls} />
    </div>
  );
};

export default Slider1;
