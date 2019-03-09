
import '../styles/hero.scss'
import React, { Component } from 'react'
  
  export default class tab1 extends Component {
    state = {
      isHidden: false
  }


showCard = (e) => {
this.setState({isHidden: true})
}
    render() {
      return (
        <div>
           <img src="Assets/Images/WomenOlympicsGraph.png" alt="mostdeco"/>
      <div onClick={this.showCard} className="onhover1"></div>
      <img className={this.state.isHidden ? "notHidden":"hidden"} src="Assets/Images/1900.png" alt="omg"/>
      <div className="onhover2"></div>
      <div className="onhover3"></div>
      <div className="onhover4"></div>
        </div>
      )
    }
  }
  
