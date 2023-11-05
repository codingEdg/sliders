import "./slider3.css";
import ImageSlider from "./imageSlider/ImageSlider";

interface CarData {
  url: string;
  alt: string;
}
interface Slider3Props {
  imageUrls: CarData[];
}

const Slider3 = ({ imageUrls }: Slider3Props) => {
  return (
    <div>
      <ImageSlider imageUrls={imageUrls} />
    </div>
  );
};

export default Slider3;
