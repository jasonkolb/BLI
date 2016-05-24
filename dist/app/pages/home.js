'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _home = require('./home.scss');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

function Home() {
  console.log('home');
  return _react2.default.createElement(
    'div',
    { className: _home2.default.root },
    'Home Page Content'
  );
}

Home.propTypes = propTypes;
exports.default = (0, _withStyles2.default)(Home, _home2.default);
module.exports = exports['default'];