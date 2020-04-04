import React, { Component } from "react";
import Slider from "react-slick";

export default class Slick extends Component {
  render() {
    const settings = {
      fade: true,
      arrows: false,
      autoplay:true,
      autoplaySpeed:3500,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      infinite: true,
      easing:"linear"
    };
    return (
      <div>
        <Slider {...settings}>
          {/* 1枚目  ヘッダーを含む */}
          <div class="slider">
            <div class="slider__header">
              <ul>
                <li><a href="#top">Top</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#works">Works</a></li>
              </ul>
            </div>
            <h2 class="slider__greet">
             Ryosuke Kobayashi
            </h2>
            <img src="photo2.jpg"/>
            <div class="anime-line"></div>
          </div>

          <div class="slider">
            <img src="Aurora.jpg" class="second-img"/>
            <div class="anime-line"></div>
          </div>

        </Slider>
      </div>
    );
  }
}