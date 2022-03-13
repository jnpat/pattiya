import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="img-fluid" style={{ width: "60rem", height: "35rem" }} src={process.env.PUBLIC_URL + props.im1} alt="First slide"></img>
        </Carousel.Item>
        <Carousel.Item>
            <img className="img-fluid" style={{ width: "60rem", height: "35rem" }} src={process.env.PUBLIC_URL + props.im2} alt="Second slide"></img>
        </Carousel.Item>
        <Carousel.Item>
            <img className="img-fluid" style={{ width: "60rem", height: "35rem" }} src={process.env.PUBLIC_URL + props.im3} alt="Third slide"></img>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default ControlledCarousel;