import React from "react";
import Slider from "react-slick";
import slide_one from "../../resources/images/slide-one.jpg";
import slide_two from "../../resources/images/slide-two.jpg";
import slide_three from "../../resources/images/slide-three.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 400,
    mobileFirst: true,
  };
  return (
    <div className="carousel_container">
      <Slider {...settings}>
        <div>
          <div className="carousel_image" style={{ backgroundImage: `url(${slide_one})` }}></div>
        </div>
        <div>
          <div className="carousel_image" style={{ backgroundImage: `url(${slide_two})` }}></div>
        </div>
        <div>
          <div className="carousel_image" style={{ backgroundImage: `url(${slide_three})` }}></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
