import "./App.css";
// import Slider1 from "./slider1/Slider1";
// import Slider2 from "./slider2/Slider2";
import Slider3 from "./slider3/Slider3";
import car1 from "./assets/images/car1.jpg";
import car2 from "./assets/images/car2.jpg";
import car3 from "./assets/images/car3.jpg";
import car4 from "./assets/images/car4.jpg";
import car5 from "./assets/images/car5.jpg";

const cars = [car1, car2, car3, car4, car5];
const carData = [
  { url: car1, alt: "car one" },
  { url: car2, alt: "car two" },
  { url: car3, alt: "car three" },
  { url: car4, alt: "car four" },
  { url: car5, alt: "car five" },
];

function App() {
  return (
    <div className="main">
      {/* <Slider1 imageUrls={cars} /> */}
      {/* <Slider2 imageUrls={cars} /> */}
      <Slider3 imageUrls={carData} />
    </div>
  );
}

export default App;
