'use strict';

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _client = require('sails-hook-react-router/lib/router/client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _client2.default)(_routes2.default, {}, // extra props to pass to router
// options - see clientRouter docs
{
  reactRootElementId: 'react-root',
  isomorphicStyleLoader: true
});