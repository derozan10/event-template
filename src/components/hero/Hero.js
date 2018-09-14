import React from "react";
import Carousel from "./Carousel";
import Countdown from "./Countdown";
import Zoom from "react-reveal/Zoom";

const Hero = () => {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <Carousel />
      <Zoom>
        <div className="siteTitleContainer">
          <div className="siteTitle">event demo website</div>
        </div>
      </Zoom>
      <Countdown />
    </div>
  );
};

export default Hero;
