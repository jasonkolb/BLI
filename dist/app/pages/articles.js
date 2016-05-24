'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _articles = require('./articles.scss');

var _articles2 = _interopRequireDefault(_articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

function Articles() {
  return _react2.default.createElement(
    'div',
    { className: _articles2.default.root },
    'Articles Page',
    _react2.default.createElement(
      'h1',
      null,
      'foo'
    )
  );
}

Articles.propTypes = propTypes;
exports.default = (0, _withStyles2.default)(Articles, _articles2.default);
module.exports = exports['default'];