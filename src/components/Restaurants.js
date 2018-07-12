import React, { Component } from 'react';
import { Button, Card, Rating, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { matchRestaurant, rejectRestaurant, updateRestaurantArray, findUpdateMatches } from '../actions/match-actions';

class Restaurant extends Component {

  handleRestaurantClick = (restaurantID) => {
    this.props.updateRestaurantArray(restaurantID)
    this.props.findUpdateMatches(`${localStorage.id}`)
  }

  triggerMatchRestaurant = (props) => {
    this.props.matchRestaurant(this.props.restaurant, `${localStorage.id}`)
    this.handleRestaurantClick(this.props.restaurant.id)
  }

  triggerRejectRestaurant = (props) => {
    this.props.rejectRestaurant(this.props.restaurant)
    this.props.updateRestaurantArray(this.props.restaurant.id)
  }

  render(){
    return (
      <Card.Group centered>
        <Card>
          <div className="crop">
            <img className='imgCrop' src={this.props.restaurant.image_url} alt=''/>
          </div>
          <Card.Header>{this.props.restaurant.name}</Card.Header>
          <Card.Meta>Avg Rating:<Rating icon='star' defaultRating={this.props.restaurant.rating} maxRating={5} /></Card.Meta>
          <Card.Meta>Review Count:{this.props.restaurant.review_count}</Card.Meta>
          <Card.Content extra>
            <div>
              <Button.Group size='large'>
                <Button basic color='green' onClick={this.triggerMatchRestaurant}>
                  <Icon name='checkmark' />Yum
                </Button>
                <Button basic color='red' onClick={this.triggerRejectRestaurant}>
                  <Icon name='close' />Yuck
                </Button>
            </Button.Group>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}

function mapStateToProps(state) {
  return {
    userID: state.userID,
    restaurants: state.restaurants,
    matches: state.matches,
    rejects: state.matches,
  }
}

export default connect(mapStateToProps, { matchRestaurant, rejectRestaurant, updateRestaurantArray, findUpdateMatches} )(Restaurant);
