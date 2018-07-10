import React, { PureComponent } from 'react';
import { Button, Form, Segment, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateSearchTerm, updateSearchCity, findMyRestaurants } from '../actions/match-actions';

class FindNewPlaces extends PureComponent{

  handleSubmitTerm = () => {
    this.props.findMyRestaurants(this.props.searchTerm, this.props.searchCity)
  }

  render (){
    return(
      <Card centered >
        <Segment inverted>
        <Form inverted onSubmit={this.handleSubmitTerm} >
        <Form.Input fluid label='Find' placeholder='Restaurant, Cafe , Bar, etc.' onChange={(e)=>this.props.updateSearchTerm(e.target.value)} />
        <Form.Input fluid label='Near' placeholder='Manhattan, Hells Kitchen, etc.' onChange={(e)=>this.props.updateSearchCity(e.target.value)} />
        <Button type='submit'>Submit</Button>
        </Form>
        </Segment>
      </Card>

    )
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
    searchCity: state.searchCity,
  }
}

export default connect(mapStateToProps, { findMyRestaurants, updateSearchTerm, updateSearchCity} )(FindNewPlaces);
