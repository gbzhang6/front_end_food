import React, { Component } from 'react';
import { Button, Form, Segment, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateSearchTerm, findMyRestaurants } from '../actions/match-actions';

class FindNewPlaces extends Component{

  handleSubmit = () => {
    this.props.findMyRestaurants(this.props.searchTerm)
  }
  render (){
    return(
      <Card centered >
        <Segment inverted>
        <Form inverted onChange={(e)=>this.props.updateSearchTerm(e.target.value)} onSubmit={this.handleSubmit}>
        <Form.Input fluid label='Please input a search catergory' placeholder='i.e. Restaurant, Coffee, Bar, etc.' />
        <Button type='submit'>Submit</Button>
        </Form>
        </Segment>
      </Card>

    )
  }
}

function mapDispatchToProps(dispatch) {

}

function mapDispatchToProps(dispatch) {
  return {
    updateSearchTerm: (value) => {
      dispatch(updateSearchTerm(value))
    }
  }
}

export default connect(null, { findMyRestaurants, updateSearchTerm })(FindNewPlaces);
