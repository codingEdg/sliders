import "./slider2.css";
import ImageSlider from "./imageSlider/ImageSlider";

interface Slider2Props {
  imageUrls: string[];
}

const Slider2 = ({ imageUrls }: Slider2Props) => {
  return (
    <div>
      <ImageSlider imageUrls={imageUrls} />
    </div>
  );
};

export default Slider2;
