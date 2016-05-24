'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Nav;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Nav() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/' },
          'Home'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/articles' },
          'Articles'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/woops' },
          'A GREAT route that doesn\'t exist on server and client'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/google' },
          'This should 404 client side, but server side route.js config works and redirects to google.'
        )
      )
    )
  );
}
module.exports = exports['default'];