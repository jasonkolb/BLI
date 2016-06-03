'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JsIndex = _react2.default.createClass({
  displayName: 'JsIndex',

  render: function render() {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return _react2.default.createElement(
      'p',
      null,
      'Hello world'
    );
  }
}); // Client-side React class


exports.default = JsIndex;
module.exports = exports['default'];