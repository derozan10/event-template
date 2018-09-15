import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import MyButton from "../utils/MyButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="discount_wrapper">
        <Fade onReveal={() => this.percentage()}>
          <div className="discount_percentage">
            <span>{this.state.discountStart}%</span>
            <span>korting</span>
          </div>
        </Fade>

        <Slide right>
          <div className="discount_description">
            <h3>Koop je tickets nu</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae
              vitae dicta sunt explicabo.
              </p>

            <MyButton
              text="Koop ze hier"
              bck="#ffa800"
              color="#ffffff"
              link="https://www.teleticketservice.com/"
            />
          </div>
        </Slide>
      </div>
    );
  }
}

export default Discount;
