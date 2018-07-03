import React, { Component } from 'react';
import wine from '../images/wine.svg';
import FindNewPlaces from '../Components/FindNewPlaces'
import { connect } from 'react-redux';
import { findRestaurantsByQuery } from '../actions/match-actions'


class Mainpage extends Component {

  render(){
    return (
      <div>
        <h2>Welcome to Dine Out</h2>
        <img src={wine} className="wine" alt="wine-glass"/>
        <FindNewPlaces />
      </div>
    );
  }
}

function mapStateToProps(state){
  return state.searchTerm
}

function mapDispatchToProps(){

}

export default connect(mapStateToProps)(Mainpage);
