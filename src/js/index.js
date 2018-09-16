import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import 'normalize.css';
import '../sass/styles.scss';
import '../favicons/favicons';

import App from './components/app';
import rootReducer from './reducers';

const logger = createLogger({
  collapsed: true
});

const middlewares = [promise, logger];

const composeEnhancers = composeWithDevTools(
  {
    // Specify here name, actionsBlacklist, actionsCreators and other options
  }
);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
