'use strict';

var React = require('react');
var AccountFields = require('./fields1');
// var SurveyFields  = require('./SurveyFields')
// var Confirmation  = require('./Confirmation')
// var Success       = require('./Success')

var fieldValues = {
	name: null,
	email: null,
	password: null,
	age: null,
	colors: []
};

var Registration = React.createClass({
	displayName: 'Registration',

	getInitialState: function getInitialState() {
		return {
			step: 1
		};
	},

	render: function render() {
		switch (this.state.step) {
			case 1:
				return React.createElement(AccountFields, null);
			// case 2:
			// 	return <SurveyFields />
			// case 3:
			// 	return <Confirmation />
			// case 4:
			// 	return <Success />
		}
	}
});

module.exports = Registration;