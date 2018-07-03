import React from 'react';
import { Button, Form, Segment, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import findRestaurant from '../actions/findRestaurant-action';

const FindNewPlaces = (props) => (
  <Card centered >
  <Segment inverted>
    <Form inverted onSubmit={props.searchTerm(["gui"])}>
      <Form.Input fluid label='Please input a search catergory' placeholder='i.e. Restaurant, Coffee, Bar, etc.' />
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
  </Card>
)

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchTerm: (searchTerm) => { dispatch(findRestaurant(searchTerm))}
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FindNewPlaces);
