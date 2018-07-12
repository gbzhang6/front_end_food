import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Rating, Icon } from 'semantic-ui-react';

class RestaurantDetail extends PureComponent {
  redirectToMatches = () => {
    this.props.history.push('/match')
  }


  render() {
    let resDetails;
    if (this.props.restaurant !== undefined && this.props.reviews.length > 0) {
      resDetails =
      <div className="res-details">
        <h1>{this.props.restaurant.name}</h1>
        <h3 className='back-Button' onClick={this.redirectToMatches}><Icon name='arrow left' /> Matches</h3>
        <div className="square" style={{backgroundImage: `url(${this.props.restaurant.photos[0]})`}}></div>
        <div className="square" style={{backgroundImage: `url(${this.props.restaurant.photos[1]})`}}></div>
        <div className="square" style={{backgroundImage: `url(${this.props.restaurant.photos[2]})`}}></div>
        <h3>Avg Rating:<Rating icon='star' defaultRating={this.props.restaurant.rating} maxRating={5} /></h3>
        <h3>Price Point:{this.props.restaurant.price}</h3>
        <h3>Num of Reviews:{this.props.restaurant.review_count}</h3>
        <h3></h3>
        <h3>Address: {this.props.restaurant.location.address1}&nbsp;,&nbsp;{this.props.restaurant.location.city}&nbsp;,&nbsp;{this.props.restaurant.location.state}&nbsp;,&nbsp;{this.props.restaurant.location.zip_code}</h3>
        <h3>Yelp Page: <a href={this.props.restaurant.url}>Click Here</a></h3>
        <h3>Review:{this.props.reviews[0].text}</h3>
        <h3>Review:{this.props.reviews[1].text}</h3>
        <h3>Review:{this.props.reviews[2].text}</h3>


      </div>
    } else {
      resDetails = []
    }
    return (
      <div>
        { resDetails }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    restaurant: state.restaurantDetail,
    reviews: state.restaurantReview,
  }
}

export default connect(mapStateToProps)(RestaurantDetail);
