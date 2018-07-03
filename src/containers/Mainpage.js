import React, { Component } from 'react';
import wine from '../images/wine.svg';
import FindNewPlaces from '../Components/FindNewPlaces'

class Mainpage extends Component {

  render(){
    return (
      <div>
        <h2>Welcome to Dine Out</h2>
        <img src={wine} className="wine" alt="wine-glass"/>
        <FindNewPlaces searchTerm={this.props.searchTerm} />
      </div>
    );
  }
}

export default Mainpage;
