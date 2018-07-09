import React, { Component } from 'react';
import { Input, Menu, Icon } from 'semantic-ui-react';
import logo from '../images/logo.svg';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
      <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <img src={logo} alt="home button"/>
          <Link to='/home'>
          </Link>
        </Menu.Item>
        <Menu.Item name='matches' active={activeItem === 'matches'} onClick={this.handleItemClick}>
          <Link to='/matches'>
            <Icon name='like' />
            Matched
          </Link>
        </Menu.Item>
        <Menu.Item name='map' active={activeItem === 'map'} onClick={this.handleItemClick}>
          <Link to='/map'>
            <Icon name='map outline' />
            Map
          </Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
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
