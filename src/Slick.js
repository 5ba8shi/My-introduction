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
            <h2>Hello</h2>
          </div>

          <div class="slider2">
            <div class="slider2__header">
              <ul>
                <li><a href="#top">Top</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#works">Works</a></li>
              </ul>
            </div>
            <h2 class="slider2__greet">
              Ryosuke Kobayashi
            </h2>
            <img src="Aurora.jpg"/>
            <div class="anime-line"></div>
            <h2>Hello</h2>
          </div>

        </Slider>
      </div>
    );
  }
}