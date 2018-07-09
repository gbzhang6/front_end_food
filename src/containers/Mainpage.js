import React, { Component } from 'react';
import wineMain from '../images/wine-main.svg';
import NavBar from './NavBar';
import FindNewPlaces from '../Components/FindNewPlaces'
import Restaurants from '../Components/Restaurants'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import Matched from '../Components/Matched';

class Mainpage extends Component {

  render(){

    const restaurants = this.props.restaurants.map(restaurant=><Restaurants key={restaurant.id} restaurant={restaurant} />)

    return (
      <div>
        <NavBar />
        <h2>Welcome to Dine Out</h2>
        <img src={wineMain} className="wine" alt="wine-glass"/>
        <FindNewPlaces />
        <Grid centered>
          {restaurants}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    userID: state.userID,
    searchTerm: state.searchTerm,
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps)(Mainpage);
