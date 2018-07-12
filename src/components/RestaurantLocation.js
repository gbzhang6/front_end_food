import React, { Component } from "react";
import { Popup } from 'semantic-ui-react';

class RestaurantLocation extends Component {

  render(){
    return (
      <div className="restaurant-location">
        <Popup
        key={1}
        trigger={<img
          src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Pic.png"
          alt="Restaurant"
          height="15"
          width="15"
          />}
          header={this.props.restaurant.name}
          content={this.props.restaurant.location.replace(/[\[\]"]+/g,'')}
      />
      </div>
    );
  }
};

export default RestaurantLocation;
