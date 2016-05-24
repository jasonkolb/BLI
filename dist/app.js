'use strict';

var _module = require('module');

var _module2 = _interopRequireDefault(_module);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _slash = require('slash');

var _slash2 = _interopRequireDefault(_slash);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

// src/app.js
// this assumes your build directory is /dist


var serveStatic = require('serve-static');

var serve = serveStatic('assets/styles');

var originalRequire = _module2.default.prototype.require;
var originalResolve = _path2.default.resolve;

// TODO
// not sure how to fix this otherwise,
// without these webpack dupes them, even with the de-dupe plugin
// only an issue when using npm link on sails-hook-react-router as devDependencies exist
var requireOverrides = ['react', 'react-dom/server', 'isomorphic-style-loader', 'react-router', 'history/lib/createLocation', 'history/lib/createMemoryHistory', 'sails/lib/hooks/views/res.view'];

global.__SERVER__ = true;
global.__CLIENT__ = false;
global.__DEBUG__ = true;

/* eslint no-console:0 */
if (!console.debug) {
  // electron - for 'devtool'
  console.debug = function () {};
}

// EXAMPLE: only log error responses
(0, _morgan2.default)('combined', {
  skip: function skip(req, res) {
    return res.statusCode < 400;
  }
});

// override resolve to intercept invalid sails node_module paths
_path2.default.resolve = function resolve() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length >= 2 && typeof args[0] === 'string' && typeof args[1] === 'string') {
    if ((0, _slash2.default)(args[0]).endsWith('/dist') && args[1] === 'node_modules') {
      args[1] = './../node_modules'; // force resolve to go up one dir
    }
  }
  return originalResolve.apply(this, args);
};

// override require to intercept invalid sails node_module require paths
_module2.default.prototype.require = function require() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length && typeof args[0] === 'string') {
    if (args[0].includes('/dist/node_modules/')) {
      args[0] = args[0].replace('/dist/node_modules/', '/node_modules/');
    }
    if (requireOverrides.includes(args[0])) {
      args[0] = originalResolve(__dirname, './../node_modules/' + args[0]);
    }
  }

  return originalRequire.apply(this, args);
};

(function lift() {
  require('sails').lift(Object.assign(require('rc')('sails'), {
    appPath: __dirname }));
})();