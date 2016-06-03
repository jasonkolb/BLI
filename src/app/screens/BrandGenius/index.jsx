// BrandGenius/index.jsx
// Client-side react form based on https://www.viget.com/articles/building-a-multi-step-registration-form-with-react

var React         = require('react')
var BrandGenius1 = require('./BrandGenius1')
// var SurveyFields  = require('./SurveyFields')
// var Confirmation  = require('./Confirmation')
// var Success       = require('./Success')

var fieldValues = {
  name     : null,
  email    : null,
  password : null,
  age      : null,
  colors   : []
}

var Registration = React.createClass({
	getInitialState: function() {
		return {
			step: 1
		}
	},

	render: function() {
		switch (this.state.step) {
			case 1:
				return <BrandGenius1 />
			// case 2:
			// 	return <SurveyFields />
			// case 3:
			// 	return <Confirmation />
			// case 4:
			// 	return <Success />
		}
	}
});

module.exports = Registration
