'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _brandgenius = require('./brandgenius.scss');

var _brandgenius2 = _interopRequireDefault(_brandgenius);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

function Home() {

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Form goes here'
    )
  );
}

Home.propTypes = propTypes;
exports.default = (0, _withStyles2.default)(Home, _brandgenius2.default);
module.exports = exports['default'];