import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import '../styles/hero.scss'
 
const slideImages = [
  'Assets/Images/excitingathletes3.jpg',
  'Assets/Images/skater.jpg',
  'Assets/Images/whaaaat.jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
}
 
class Hero extends Component {
    render(){
    return (
        <div className="hero">
        <img src="Assets/Images/hercules@2x.png" alt="Logo" className="logo"/>
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          <div className="imgOverlay"></div>
            <span>“True champions aren’t always the ones that win but those with the most guts.”</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          <div className="imgOverlay"></div>
            <span>“The success of every woman should be the inspiration to another. We should raise each other up and make sure we’re strong”
</span>
              </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          <div className="imgOverlay"></div>
            <span>“Don’t be afraid if things seem difficult in the beginning. That’s only the first impression. The important thing is not to retreat: You have to master yourself."</span>
          </div>
        </div>
      </Slide>
      </div>
    )
  }
}

export default Hero;

