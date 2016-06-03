// Client-side React class
import React from 'react';

var JsIndex = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <p>Hello world</p>
    );
  }
});

export default JsIndex;
