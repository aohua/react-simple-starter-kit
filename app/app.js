import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';

import App from './containers/App/index';
import createRoutes from './routes';
import configureStore from './store/store';
import { selectLocationState } from './containers/App/selectors';

const initialState = {};
const store = configureStore(initialState, browserHistory);


const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});

const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

/* global document:true */
render(
  <Provider store={store}>
    <Router
      history={history}
      routes={rootRoute}
      render={
        // Scroll to top when going to a new page, imitating default browser
        // behaviour
        applyRouterMiddleware(useScroll())
      }
    />
  </Provider>,
  document.getElementById('root')
);
