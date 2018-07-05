import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { matchRestaurant, rejectRestaurant } from '../actions/match-actions';

const Restaurant = (props) => {

  const triggerMatchRestaurant = () => {
    props.matchRestaurant(props.restaurant)
  }

  const triggerRejectRestaurant = () => {
    props.rejectRestaurant(props.restaurant)
  }

  return (
    <Card.Group size="medium">
      <Card>
        <div className="crop">
        <img className='imgCrop' src={props.restaurant.image_url} alt=''/>
        </div>
        <Card.Header>{props.restaurant.name}</Card.Header>
        <Card.Meta>Avg Rating:{props.restaurant.rating}</Card.Meta>
        <Card.Meta>Review Count:{props.restaurant.review_count}</Card.Meta>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='red' onClick={triggerRejectRestaurant}>
              Yuck
            </Button>
            <Button basic color='green' onClick={triggerMatchRestaurant}>
              Yay
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

function mapStateToProps(state) {
  return {
    matches: state.user['matches'],
    rejects: state.user['rejects'],
  }
}

export default connect(mapStateToProps, { matchRestaurant, rejectRestaurant} )(Restaurant);
