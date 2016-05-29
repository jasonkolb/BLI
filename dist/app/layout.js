'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nav = require('./screens/LandingPage1/shared/nav.js');

var _nav2 = _interopRequireDefault(_nav);

var _normalise = require('../assets/styles/normalise.css');

var _normalise2 = _interopRequireDefault(_normalise);

var _app = require('../assets/styles/app.css');

var _app2 = _interopRequireDefault(_app);

var _withStyles = require('withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _react.PropTypes.element.isRequired,
  route: _react.PropTypes.object.isRequired
};

function Layout(_ref) {
  var route = _ref.route;
  var children = _ref.children;

  if (__CLIENT__ && route && route.name) {
    document.title = 'Business Launch Institute'; // route.name.charAt(0).toUpperCase() + route.name.substr(1);
  }

  return _react2.default.createElement(
    'div',
    null,
    children
  );
}

Layout.propTypes = propTypes;
exports.default = (0, _withStyles2.default)(Layout, _normalise2.default, _app2.default);
module.exports = exports['default'];