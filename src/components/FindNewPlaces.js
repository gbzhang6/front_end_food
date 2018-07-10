import React, { PureComponent } from 'react';
import { Button, Form, Segment, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateSearchTerm, updateSearchCity, updatePricePoint, findMyRestaurants } from '../actions/match-actions';

class FindNewPlaces extends PureComponent{

  handleSubmitTerm = () => {
    this.props.findMyRestaurants(this.props.searchTerm, this.props.searchCity, this.props.pricePoint)
  }

  render (){
    return(
      <Card centered >
        <Segment inverted>
        <Form inverted onSubmit={this.handleSubmitTerm} >
        <Form.Input fluid label='Find' placeholder='Restaurant, Cafe , Bar, etc.' onChange={(e)=>this.props.updateSearchTerm(e.target.value)} />
        <Form.Input fluid label='Near' placeholder='Manhattan, Hells Kitchen, etc.' onChange={(e)=>this.props.updateSearchCity(e.target.value)} />
        <Form.Group widths='equal'>
          <Form.Field label='Price' control='select' onChange={(e)=>this.props.updatePricePoint(e.target.value)}>
            <option value='0'></option>
            <option value='1'>$</option>
            <option value='2'>$$</option>
            <option value='3'>$$$</option>
            <option value='4'>$$$$</option>
          </Form.Field>
        </Form.Group>
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
    pricePoint: state.pricePoint,
  }
}

export default connect(mapStateToProps, { findMyRestaurants, updateSearchTerm, updateSearchCity, updatePricePoint } )(FindNewPlaces);
