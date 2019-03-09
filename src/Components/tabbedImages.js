import React, { Component } from 'react';
import Tab1 from './tab1'
import Tab2 from './tab2'
import Tab3 from './tab3'
import '../styles/hero.scss'

class App extends Component {
state = {
currentTab:1
}

setTab1 = () =>{
  this.setState({
    currentTab:1
  })
}
setTab2 = () =>{
  this.setState({
    currentTab:2
  })
}
setTab3 = () =>{
  this.setState({
    currentTab:3
  })
}

  render() {
    let tabcontent = ''
    let tabImg1 = ''
    let tabImg2 = ''
    let tabImg3 = ''
    if(this.state.currentTab===1){
      tabcontent = <Tab1 />
      tabImg1 = "Assets/Images/active1.png"
      tabImg2 = "Assets/Images/inactive2.png"
      tabImg3 = "Assets/Images/inactive3.png"

    } else if (this.state.currentTab===2) {
      tabcontent =<Tab2 />
      tabImg1 = "Assets/Images/inactive1.png"
      tabImg2 = "Assets/Images/active2.png"
      tabImg3 = "Assets/Images/inactive3.png"
    } else if (this.state.currentTab===3) {
      tabcontent =<Tab3 />
      tabImg1 = "Assets/Images/inactive1.png"
      tabImg2 = "Assets/Images/inactive2.png"
      tabImg3 = "Assets/Images/active3.png"
    }


    return (
      <div className="btns__tabs">
      {/* <button onClick={this.setTab1}>tab 1</button>
      <button onClick={this.setTab2}>tab 2</button>
      <button onClick={this.setTab3}>tab 3</button> */}
      <div className="btns">
        <img onClick={this.setTab1} src={tabImg1} alt=""/>
        <img onClick={this.setTab2} src={tabImg2} alt=""/>
        <img onClick={this.setTab3} src={tabImg3} alt=""/>
      </div>
      <div className="tabImage">
      </div>
      {tabcontent}
      </div>
    );
  }
}

export default App;
