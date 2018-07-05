import React, { Component } from 'react';
import wine from '../images/wine.svg';
import FindNewPlaces from '../Components/FindNewPlaces'
import Restaurants from '../Components/Restaurants'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

class Mainpage extends Component {

  render(){

    const restaurants = this.props.restaurants.map(restaurant=><Restaurants key={restaurant.id} restaurant={restaurant} />)

    return (
      <div>
        <h2>Welcome to Dine Out</h2>
        <img src={wine} className="wine" alt="wine-glass"/>
        <FindNewPlaces />
        <Grid centered>
          {restaurants}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {searchTerm: state.searchTerm,
  restaurants: state.restaurants}

}

export default connect(mapStateToProps)(Mainpage);
