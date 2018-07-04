import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Restaurant extends Component {

}

handleFindRecipeClick = (selectedIngredients) => {
    fetch(URL2 + this.state.selectedIngredients.join('%20'))
    .then(response => response.json())
    .then(recipes => this.setState(
      {
        recipes
      })
    )
  }

export default connect(mapStateToProps)(Restaurant)
