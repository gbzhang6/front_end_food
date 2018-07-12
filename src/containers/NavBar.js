import React, { Component } from 'react';
import { Input, Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = {
    activeItem: '',
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu inverted>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={NavLink} to='/home'>
            <Icon name='home' />
            Dine Out
          </Menu.Item>
          <Menu.Item name='match' active={activeItem === 'matches'} onClick={this.handleItemClick} as={NavLink} to='/match'>
            <Icon name='like' />
            Matched
          </Menu.Item>
          <Menu.Item name='map' active={activeItem === 'map'} onClick={this.handleItemClick} as={NavLink} to='/map'>
            <Icon name='map outline' />
            Map
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search Your Matches...' />
            </Menu.Item>
           { localStorage.getItem('token') ?
             <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={()=>localStorage.clear()}
              href="/"
              />
            :
            null}
          </Menu.Menu>
      </Menu>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default withRouter(connect(mapStateToProps)(NavBar));
