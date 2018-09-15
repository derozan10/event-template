import React, { Component } from "react";
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Hero from "./components/hero/Hero";
import Highlights from "./components/sections/Highlights";
import PlaceTime from "./components/sections/PlaceTime";
import Pricing from "./components/sections/Pricing";
import Location from "./components/sections/Location";

import "./resources/styles.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Element name="Event">
          <Hero />
        </Element>
        <Element name="PlaceTime">
          <PlaceTime />
        </Element>
        <Element name="Highlights">
          <Highlights />
        </Element>
        <Element name="Pricing">
          <Pricing />
        </Element>
        <Element name="Location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
