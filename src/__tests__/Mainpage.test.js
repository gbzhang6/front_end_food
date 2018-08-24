import React from 'react';
import ReactDOM from 'react-dom';
import Mainpage from '../Containers/Mainpage.js';
import App from '../Containers/App.js';
import { shallow, mount, render } from 'enzyme';

it('renders welcome message', () => {
  const wrapper = shallow(<Mainpage />);
  const welcome = <h2>Welcome to Dine Out</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
