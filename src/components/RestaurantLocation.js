import React, { Component } from "react";

class RestaurantLocation extends Component {
  render(){
    console.log("renderning restaurant location");
    return (
      <div className="restaurant-location">
        <img
          src="http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-Pic.png"
          alt="Restaurant"
          height="15"
          width="15"
          />
      </div>
    );
  }
};

export default RestaurantLocation;
