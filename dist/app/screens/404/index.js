'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ = require('./404.scss');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

function NotFound() {
  return _react2.default.createElement(
    'div',
    { className: _2.default.root },
    '404 Not Found'
  );
}

NotFound.propTypes = propTypes;
exports.default = (0, _withStyles2.default)(NotFound, _2.default);
module.exports = exports['default'];