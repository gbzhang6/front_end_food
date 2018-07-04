import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

const Restaurant = (props) => (
  <Card.Group size="medium">
    <Card>
    <Image src={props.restaurant.image_url}/>
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

export default Restaurant;
