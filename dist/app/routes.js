'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _home = require('./pages/home');

var _home2 = _interopRequireDefault(_home);

var _privacy = require('./pages/privacy');

var _privacy2 = _interopRequireDefault(_privacy);

var _articles = require('./pages/articles');

var _articles2 = _interopRequireDefault(_articles);

var _ = require('./pages/404');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _layout2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'articles', component: _articles2.default, routingPreference: 'sails' }),
    _react2.default.createElement(_reactRouter.Route, { path: 'privacy', component: _privacy2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _2.default })
  )
);
module.exports = exports['default'];