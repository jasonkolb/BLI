// REACT ROU TING (Client)

import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import Layout from '../layout';
import LandingPage1 from '../screens/LandingPage1/index';
import Privacy from '../screens/Privacy/index';
import Articles from '../screens/Articles/index';
import NotFound from '../screens/404/index';

import BrandGenius from '../screens/BrandGenius/index';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={LandingPage1} />
      <Route path="articles" component={Articles} routingPreference="sails" />
      <Route path="privacy" component={Privacy} />

      <Route path="brandgenius" component={BrandGenius} />

      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
