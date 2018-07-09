import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import thunk from 'redux-thunk'
import 'semantic-ui-css/semantic.min.css';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'redux'
import { routerMiddleware } from './middleware'
import { startListener } from './listener'
import { push } from './actions'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import reducer from './reducers/Reducer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),  applyMiddleware(thunk) 
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root')
);
