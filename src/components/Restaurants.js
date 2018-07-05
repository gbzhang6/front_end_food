import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { matchRestaurant, rejectRestaurant } from '../actions/match-actions';

class Restaurant extends Component {

  triggerMatchRestaurant = (props) => {
    this.props.matchRestaurant(this.props.restaurant)
  }
  triggerRejectRestaurant = (props) => {
    this.props.rejectRestaurant(this.props.restaurant)
  }
  render(){
    return (
      <Card.Group>
        <Card>
          <div className="crop">
            <img className='imgCrop' src={this.props.restaurant.image_url} alt=''/>
          </div>
          <Card.Header>{this.props.restaurant.name}</Card.Header>
          <Card.Meta>Avg Rating:{this.props.restaurant.rating}</Card.Meta>
          <Card.Meta>Review Count:{this.props.restaurant.review_count}</Card.Meta>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='red' onClick={this.triggerRejectRestaurant}>
                Yuck
              </Button>
              <Button basic color='green' onClick={this.triggerMatchRestaurant}>
                Yay
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    )
  }
}

function mapStateToProps(state) {
  return {
    matches: state.user['matches'],
    rejects: state.user['rejects'],
  }
}

export default connect(mapStateToProps, { matchRestaurant, rejectRestaurant} )(Restaurant);
