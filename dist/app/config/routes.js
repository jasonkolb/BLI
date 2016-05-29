'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _layout = require('../layout');

var _layout2 = _interopRequireDefault(_layout);

var _index = require('../screens/LandingPage1/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../screens/Privacy/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../screens/Articles/index');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('../screens/404/index');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('../screens/BrandGenius/index');

var _index10 = _interopRequireDefault(_index9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REACT ROU TING (Client)

exports.default = _react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _layout2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _index2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'articles', component: _index6.default, routingPreference: 'sails' }),
    _react2.default.createElement(_reactRouter.Route, { path: 'privacy', component: _index4.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'brandgenius', component: _index10.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _index8.default })
  )
);
module.exports = exports['default'];