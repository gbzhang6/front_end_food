import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { matchRestaurant, rejectRestaurant } from '../actions/match-actions';

const Restaurant = (props) => (

  <Card.Group>
    <Card>
    <Image size="medium" src={props.restaurant.image_url}/>
    <Card.Header>{props.restaurant.name}</Card.Header>
    <Card.Meta>Avg Rating:{props.restaurant.rating}</Card.Meta>
    <Card.Meta>Review Count:{props.restaurant.review_count}</Card.Meta>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='red'>
            Yuck
          </Button>
          <Button basic color='green'>
            Yay
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)

console.log("store", this.props)


function mapStateToProps(state) {
  return {
    matches: state.user['matches'],
    rejects: state.user['rejects'],
  }
}

export default connect(mapStateToProps, { matchRestaurant, rejectRestaurant} )(Restaurant);
