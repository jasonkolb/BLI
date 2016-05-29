import React, { PropTypes } from 'react';
import Nav from './screens/LandingPage1/shared/nav.js';
import Normalise from '../assets/styles/normalise.css';

import AppStyles from '../assets/styles/app.css';

import withStyles from 'withStyles';

const propTypes = {
  children: PropTypes.element.isRequired,
  route: PropTypes.object.isRequired,
};

function Layout({ route, children }) {
  if (__CLIENT__ && route && route.name) {
    document.title = 'Business Launch Institute'; // route.name.charAt(0).toUpperCase() + route.name.substr(1);
  }

  return (
    <div>
      {children}
    </div>
  );
}

Layout.propTypes = propTypes;
export default withStyles(Layout, Normalise, AppStyles);
