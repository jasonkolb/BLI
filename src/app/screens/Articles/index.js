import React, { PropTypes } from 'react';
import withStyles from 'withStyles';
import s from './articles.scss';

const propTypes = {
};

function Articles() {
  return (
    <div className={s.root}>
      Articles Page
      <h1>foo</h1>
    </div>
  );
}

Articles.propTypes = propTypes;
export default withStyles(Articles, s);
