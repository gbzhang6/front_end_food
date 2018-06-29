import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';

ReactDOM.render(
    <App />,
  document.getElementById('root'));
registerServiceWorker();
