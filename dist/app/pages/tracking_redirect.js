"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tracking_Redirect() {
    console.log("Tracking and redirecting");
    // express.cookieSession({cookie: {device: 'foo'}});
    // res.cookie('device', 'iphone or something');
    console.log("DEVICE COOKIE SET");
    // res.redirect('http://www.google.com');
}

exports.default = Tracking_Redirect;
module.exports = exports['default'];