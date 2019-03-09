import React, { Component } from 'react';
import logo from './logo.svg';
import './formStyles.css';

class form extends Component {
  render() {
    return (
      <div className="form-and-boxes">
        <div className="form-box">
        <h2>Get Inspired</h2>
        <p>Complete the below and receive information about outstanding female athletes</p>
        <label>Country
          <input type="text" />
        </label>
        <br></br>
        <label>Sport
          <input type="text" />
        </label>
        <br></br>
        <button>CONTINUE</button>
        </div>

        <div className="portraits">
          <div className="sportsPics">
            <img src="./Assets/Images/hayley_wickenheiser_2010_e_1340px-e1550866291436.png" />
          </div>
          <div className="sportsPics">
            <img src="./Assets/Images/jayna.png" />
          </div>
          <div className="sportsPics">
            <img src="./Assets/Images/ouelette.png" />
          </div>
        
        
        </div>
      </div>
    );
  }
}

export default form;
