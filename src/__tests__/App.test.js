import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Containers/App.js';
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});
