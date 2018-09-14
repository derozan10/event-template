import React, { Component } from "react";

import Header from "./components/header_footer/Header";
import Hero from "./components/hero/Hero";
import Highlights from "./components/sections/Highlights";

import "./resources/styles.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Highlights />
      </div>
    );
  }
}

export default App;
