import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLocation } from '../actions/match-actions';
import { Popup } from 'semantic-ui-react';

class MyLocation extends Component {

  componentDidMount() {
    this.getLocation()
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      <p>"Geolocation is not supported by this browser."</p>
    }
  }
  showPosition = (position) => {
    this.props.userLocation(position.coords.longitude, position.coords.latitude)
  }

  render() {
    return (
      <div className="me">
        <Popup
        key={1}
        trigger={<img
          src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png"
          alt="You are here"
          height="20"
          width="20"
          />}
          header={'You are here'}
        />
      </div>
    );
  }
};


function mapStateToProps(state) {
  return {
    longitude: state.user.longitude,
    latitude: state.user.latitude,
  }
}

export default connect(mapStateToProps, { userLocation } )(MyLocation);
