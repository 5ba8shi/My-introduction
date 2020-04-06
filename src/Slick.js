import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          </div>

          <div class="slider">
            <div class="slider__header">
              <ul>
                <li><a href="#top">Top</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#works">Works</a></li>
              </ul>
            </div>
            <div class="slider__box">
              <h2 class="slider__box__greet">
                Ryosuke Kobayashi
              </h2>
            </div>
            <img src="photo3.jpg"/>
            <div class="anime-line"></div>
          </div>

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
            <img src="photo4.jpeg"/>
            <div class="anime-line"></div>
          </div>

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
            <img src="photo5.jpeg"/>
            <div class="anime-line"></div>
          </div>

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
            <img src="photo6.jpeg"/>
            <div class="anime-line"></div>
          </div>
        </Slider>
      </div>
    );
  }
}