import React, { Component } from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { findMyMatches, removeRest, restDetails, restReviews } from '../actions/match-actions';
import { withRouter } from 'react-router-dom';
import NavBar from '../Containers/NavBar';

class Matched extends Component {
  state = {
    clicked: false,
  }
  componentDidMount() {
    this.props.findMyMatches(`${localStorage.id}`)
  }

  rejectRestaurant = (rejectedRestObj) => {
    this.props.removeRest(rejectedRestObj, this.props.userID )
  }

  redirectToDetails = () => {
    this.props.history.push('/details')
  }

  moreDetails = (restObj) => {
    this.props.restDetails(restObj.restaurant.yelp_id)
    this.props.restReviews(restObj.restaurant.yelp_id)
    setTimeout( () => {this.redirectToDetails()}, 1500);

  }

  render(){
    let matches;
    if (this.props.matches !== undefined) {
      matches = this.props.matches.map(match => <Card>
        <div className="crop">
          <img className='imgCrop' src={match.restaurant.image_url} alt=''/>
        </div>
        <Card.Header>{match.restaurant.name}</Card.Header>
        <Card.Meta>Avg Rating:{match.restaurant.rating}</Card.Meta>
        <Card.Meta>Review Count:{match.restaurant.review_count}</Card.Meta>
        <Card.Content extra>
          <div>
            <Button.Group size='large'>
              <Button basic color='grey' onClick={()=>this.moreDetails(match)}>
                <Icon name='plus' /> Details
              </Button>
              <Button.Or />
              <Button basic color='red' onClick={()=>this.rejectRestaurant(match)}>
                <Icon name='trash alternate' /> Delete
              </Button>
            </Button.Group>
          </div>
        </Card.Content>
      </Card>)
    } else {
      matches = []
    }
    return (
      <div className='matched'>
      <NavBar />
      <h1>Your Matches</h1>
      <Card.Group centered >
        { matches.length > 0 ? matches : <p>You have not matched yet</p>}
      </Card.Group>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userID: state.userID,
    matches: state.matches[state.matches.length - 1]
  }
}

export default withRouter(connect(mapStateToProps, { findMyMatches, removeRest, restDetails, restReviews } )(Matched));
