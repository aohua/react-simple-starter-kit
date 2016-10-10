import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import configureStore from './store/store';
import rootSaga from './sagas/sagas';

// inject foundation
import './foundation-sites/scss/foundation.scss';

const store = configureStore();
store.runSaga(rootSaga);
/* global document:true */
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
