import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducer from './reducers/Reducer'

const store = createStore(
  reducer,
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
