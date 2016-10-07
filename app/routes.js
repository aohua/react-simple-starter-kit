import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App/index';
import Home from './containers/Home/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
