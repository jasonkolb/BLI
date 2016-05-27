'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _react.PropTypes.element.isRequired,
  route: _react.PropTypes.object.isRequired
};

function Layout(_ref) {
  var route = _ref.route;
  var children = _ref.children;

  if (__CLIENT__ && route && route.name) {
    document.title = route.name.charAt(0).toUpperCase() + route.name.substr(1);
  }

  return _react2.default.createElement(
    'div',
    null,
    children
  );
}

Layout.propTypes = propTypes;
exports.default = withStyles(Layout, Normalise, AppStyles);
module.exports = exports['default'];