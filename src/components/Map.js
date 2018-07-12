import React, { Component } from 'react';
import NavBar from '../Containers/NavBar';
import GoogleMapReact from 'google-map-react';
import MyLocation from "./MyLocation";
import RestaurantLocation from "./RestaurantLocation";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class OurMap extends Component {
  state = {
    center: {
      lat: 40.74,
      lng: -74,
    },
    zoom: 12,
    hover: false,
  };

  render() {
      // Important! Always set the container height explicitly
      let restaurantLocations;
      if (this.props.matches !== undefined) {
        restaurantLocations = this.props.matches.map(matchedRestaurant => <RestaurantLocation lat={matchedRestaurant.restaurant.latitude} lng={matchedRestaurant.restaurant.longitude} text={'restaurant'} restaurant={matchedRestaurant.restaurant}/>)
      } else {
        restaurantLocations = [];
      }
      return (
        <div style={{ height: '100vh', width: '100%' }}>
          <NavBar />
          <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyBibOBmg2_MOPMvZT0CfydvlfqZ5nV4TJA' }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
           <MyLocation
             lat={this.props.user.latitude}
             lng={this.props.user.longitude} text={'You'}
             />
           {restaurantLocations}
          </GoogleMapReact>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    matches: state.matches[state.matches.length - 1],
  }
}

function mapDispatchToProps(dispatch) {
  return {


  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OurMap));
