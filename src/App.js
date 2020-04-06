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
        introduction:"チーム内で期日とチーム開発アプリです.課題ではありますが、スクラムを組み、チーム開発をするのは初めてだったので、最初は勝手がわかりませんでした。 メルカリのクローンサイトを作成し、チーム内で期日とスプリント目標を持ち、各自が責任をもって開発をしていくことで、チーム開発の流れを学びました。 いままで１人での開発が主だったのですが、技術力が違う中で、毎日のデイリースクラムや 週１回の勉強会を通じ、自分の技術力の向上はもちろん、アウトプットを積極的にしていくことで チームとしての底力を向上できたと思います。",
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
                <p>1991/02/09</p>
                <p>兵庫県川西市生まれ</p>
                <p>2014年3月、大阪経済大学経済学部経済学科 卒業</p>
                <p class="about1">大学4回生の時にカナダへ3ヶ月留学</p>
                <p>4回生を休学する</p>
                <p>セブに英語とプログラミングを勉強するために留学</p>
                <p>現在帰国しtechexpertに在学中</p>
                <ul class="icon-ul">
                  {/* <li><FontAwesomeIcon icon={['fab', 'twitter']} /></li> */}
                  <li><a href="mailto:yusukee0406@gmail.com"><FontAwesomeIcon icon={['fas', 'envelope']} /></a></li>
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

