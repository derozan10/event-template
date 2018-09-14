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
    speed: 300,
    mobileFirst: true
  };
  return (
    <Slider {...settings}>
      <div>
        <div
          style={{
            background: `url(${slide_one})`
          }}
          className="carrousel_image"
        />
      </div>
      <div>
        <div
          style={{
            background: `url(${slide_two})`
          }}
          className="carrousel_image"
        />
      </div>
      <div>
        <div
          style={{
            background: `url(${slide_three})`
          }}
          className="carrousel_image"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
