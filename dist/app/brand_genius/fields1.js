"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// file: AccountFields.jsx

var React = require('react');

var AccountFields = React.createClass({
  displayName: "AccountFields",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "label",
        null,
        "Name"
      ),
      React.createElement("input", { type: "text",
        ref: "name",
        defaultValue: this.props.fieldValues.name }),
      React.createElement(
        "label",
        null,
        "Password"
      ),
      React.createElement("input", { type: "password",
        ref: "password",
        defaultValue: this.props.fieldValues.password }),
      React.createElement(
        "label",
        null,
        "Email"
      ),
      React.createElement("input", { type: "email",
        ref: "email",
        defaultValue: this.props.fieldValues.email }),
      React.createElement(
        "button",
        { onClick: this.saveAndContinue },
        "Save and Continue"
      )
    );
  },

  saveAndContinue: function saveAndContinue(e) {
    e.preventDefault();

    // Get values via this.refs
    var data = {
      name: this.refs.name.getDOMNode().value,
      password: this.refs.password.getDOMNode().value,
      email: this.refs.email.getDOMNode().value
    };

    this.props.saveValues(data);
    this.props.nextStep();
  }
});

// module.exports = AccountFields
exports.default = AccountFields;
module.exports = exports['default'];