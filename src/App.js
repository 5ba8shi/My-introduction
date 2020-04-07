import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.scss';
import Slick from './Slick';
import Skill from './Skill';
import Intro from './Intro';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FadeIn from "./fedein";
import Works from './Works';
import { Link, animateScroll as scroll } from "react-scroll";

library.add(fab, fas, far);

class App extends React.Component {
  
  render(){
    const portfolioList = [
      {
        name:"メルカリ",
        image:"merukari.jpg",
        introduction:"6人、１チームでの開発。スクラムマスターを担当して、SNS認証、パンくずリスト、クレジットカード、マイページのビューの作成を行いました。そして週一回の勉強会を通じて自分の学んだ技術を発表することによりアウトプットを行いました。",
        title:"チーム開発［メルカリクローンサイト]",
        language:"HTML,Haml,scss,Ruby,Rails,javascript",
        url:"http://18.177.78.202/"
      },
      {
        name:"Mina De Tweet!!",
        image:"mina-de-tweet.png",
        introduction:"１つ目の個人アプリです。インスタグラムのような日々の日常を画像URLにて共有。そして画像に対してコメントや返答ができます。",
        title:"個人開発アプリ１つ目",
        language:"HTML,Haml,scss,Ruby,Rails,javascript",
        url:"http://18.177.111.188/"
      },
      {
        name:"Portfolio",
        image:"Myportfolio.png",
        introduction:"ReactでPortfolioを作成しました。シングルページで作ることでページを移動せずに内容が把握できるようにしました。",
        title:"React開発[Portfolio]",
        language:"React",
        url:"#top"
      }
    ];
    
    
    return (
      <div className="App" id="top">
        <FadeIn.TopDown>
          <Intro/>
        </FadeIn.TopDown>

        <FadeIn.Up>
          <Slick/>
        </FadeIn.Up>

        <div class="main" id="about">
          <div class="main__contents">
            <h1 class="main__contents__about">About</h1>
            <div class="main__contents__left">
              <FadeIn.Left>
                <img src="small-otter.jpg" width="310px" height="230px"/>
              </FadeIn.Left>
              <FadeIn.Up>
                <Skill/>
              </FadeIn.Up>
            </div>
            <FadeIn.Right>
              <div class="main__contents__right">
                <h5>小林 亮介</h5>
                <p>1991年&nbsp;2月9日</p>
                <p>&emsp;兵庫県川西市生まれ</p>
                <p>2014年&nbsp;3月</p>
                <p>&emsp;大阪経済大学経済学部経済学科 卒業</p>
                <p>2014年&nbsp;4月〜2014年&nbsp;11月</p>
                <p>&emsp;ユニペックス㈱&emsp;営業事務に従事</p>
                <p>2015年&nbsp;2月〜2018年&nbsp;7月</p>
                <p>&emsp;㈱ケイエヌトレーディング&emsp;営業と海外仕入れに従事</p>
                <p>2018年&nbsp;11月〜2019年&nbsp;10月</p>
                <p>&emsp;㈱KSAインターナショナル&emsp;国際物流の営業</p>
                <ul class="icon-ul">
                  {/* <li><FontAwesomeIcon icon={['fab', 'twitter']} /></li> */}
                  <li><a href="mailto:o64.kobayashi.ryosuke@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope']} /></a></li>
                  {/* <li><FontAwesomeIcon icon={['fab', 'instagram']} /></li> */}
                </ul>
              </div>
            </FadeIn.Right>
          </div>
        </div>

        <div class="portfolio" id="works">
          <h3>Works</h3>
          <FadeIn.Up>
            <div class="portfolio__list">
              {portfolioList.map((portfolioitem)=>{
                return(
                  <Works
                    name={portfolioitem.name}
                    image={portfolioitem.image}
                    introduction={portfolioitem.introduction}
                    title={portfolioitem.title}
                    language={portfolioitem.language}
                    url={portfolioitem.url}
                  />
                )
              })}
            </div>
          </FadeIn.Up>
        </div>

      </div>
    );
  }
}

export default App;

