import React, { Component } from 'react';
import wine from '../images/wine.svg';
import FindNewPlaces from '../Components/FindNewPlaces'
import Restaurants from '../Components/Restaurants'
import { connect } from 'react-redux';
import { findRestaurantsByQuery } from '../actions/match-actions'


class Mainpage extends Component {

  render(){

    const restaurants = this.props.restaurants.map(restaurant=><Restaurants key={restaurant.id} restaurant={restaurant} />)


    console.log("current Search Term", this.props.searchTerm)
    return (
      <div>
        <h2>Welcome to Dine Out</h2>
        <img src={wine} className="wine" alt="wine-glass"/>
        <FindNewPlaces />
        {restaurants}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {searchTerm: state.searchTerm,
  restaurants: state.restaurants}

}

function mapDispatchToProps(dispatch){

}

export default connect(mapStateToProps)(Mainpage);
