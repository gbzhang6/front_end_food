import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { createStore, combineReducers } from 'redux'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import homepageReducer from './reducers/MatchesReducer'

export const defaultState = {
    user: {
      matches:[],
      rejects:[],
      comments:[],
    },
    restaurants: [],
    searchTerm: [],
}

const store = createStore(
  homepageReducer,
    { ...defaultState },
    window.devToolsExtension && window.devToolsExtension()
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root')
);
