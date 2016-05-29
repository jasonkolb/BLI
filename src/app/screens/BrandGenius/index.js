import React, { PropTypes } from 'react';
import withStyles from 'withStyles';
import s from './brandgenius.scss';

const propTypes = {
};

function BrandGenius() {

  return (
    <div>
      <h1>Form goes here</h1>
    </div>
  );

}

BrandGenius.propTypes = propTypes;
export default withStyles(BrandGenius, s);
