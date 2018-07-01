import React, { Component } from 'react';
import {connect} from 'react-redux';
import wine from '../images/wine.svg';

class Mainpage extends Component {

  state = {
    allRestaurants: [],
    matchedRestaurants: [],
    rejectedRestaurants: [],
  }

  render(){
    return (
      <div>
        <h2>Welcome to Dine Out</h2>
        <img src={wine} className="wine" alt="wine-glass"/>
      </div>
    );
  }
}

export default Mainpage;
