import React, { Component } from "react";

import Header from "./components/Header_footer/Header";
import Featured from "./components/featured/Featured";

import "./resources/styles.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", backgroundColor: "pink" }}
      >
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
