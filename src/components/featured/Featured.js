import React from "react";
import Carousel from "./Carousel";
const Featured = () => {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">event demo website</div>
      </div>
    </div>
  );
};

export default Featured;
