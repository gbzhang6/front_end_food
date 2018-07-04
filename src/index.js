import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
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
