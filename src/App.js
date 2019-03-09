import React, { Component } from 'react';
import './App.css';
import Hero from './Components/Hero'
import TabCharts from './Components/tabbedImages'
import Form from './formAndBoxes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <h2 className="textMain">HERcules showcases the achievement of women in the Olympics to motivate aspiring and curious female athletes.</h2>
        <TabCharts />
        <Form />
      </div>
    );
  }
}

export default App;
