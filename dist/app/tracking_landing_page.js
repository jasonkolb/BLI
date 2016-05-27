'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _home = require('./home.scss');

var _home2 = _interopRequireDefault(_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tracking_Redirect = function (_Component) {
  _inherits(Tracking_Redirect, _Component);

  function Tracking_Redirect(props) {
    _classCallCheck(this, Tracking_Redirect);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tracking_Redirect).call(this, props));
  }

  _createClass(Tracking_Redirect, [{
    key: 'render',
    value: function render() {
      req.session.device = 'iphone or something';
      res.redirect('http://www.google.com');
    }
  }]);

  return Tracking_Redirect;
}(Component);

exports.default = Tracking_Redirect;
module.exports = exports['default'];