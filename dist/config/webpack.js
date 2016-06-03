'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var _path = require('path');

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _assetsWebpackPlugin = require('assets-webpack-plugin');

var _assetsWebpackPlugin2 = _interopRequireDefault(_assetsWebpackPlugin);

var _webpackNodeExternals = require('webpack-node-externals');

var _webpackNodeExternals2 = _interopRequireDefault(_webpackNodeExternals);

var _linkerWebpackPlugin = require('linker-webpack-plugin');

var _linkerWebpackPlugin2 = _interopRequireDefault(_linkerWebpackPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var DEBUG = process.argv && !process.argv.includes('--release');
var VERBOSE = process.argv && process.argv.includes('--verbose');

var AUTOPREFIXER_BROWSERS = ['Android 2.3', 'Android >= 4', 'Chrome >= 35', 'Firefox >= 31', 'Explorer >= 9', 'iOS >= 7', 'Opera >= 12', 'Safari >= 7.1'];

var GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG,
  __DEBUG__: DEBUG,
  __SERVER__: false,
  __CLIENT__: true
};

var defaultConfig = {
  output: {
    publicPath: '/',
    sourcePrefix: '  '
  },

  cache: DEBUG,
  debug: false,

  stats: {
    assets: false,
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false
  },

  plugins: [new _webpack2.default.optimize.OccurenceOrderPlugin()],

  // new webpack.ProvidePlugin({
  //   withStyles: "isomorphic-style-loader/lib/withStyles",
  // })
  resolveLoader: {
    modulesDirectories: [(0, _path.resolve)(__dirname, './../../node_modules')]
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json', '.scss', '.css'],
    root: [(0, _path.resolve)(__dirname, './../../src/app/'), (0, _path.resolve)(__dirname, './../../src/assets')],
    alias: {
      withStyles: 'isomorphic-style-loader/lib/withStyles',
      react: (0, _path.resolve)(__dirname, './../../node_modules/react'),
      'react-router': (0, _path.resolve)(__dirname, './../../node_modules/react-router'),
      'react-dom': (0, _path.resolve)(__dirname, './../../node_modules/react-dom'),
      'react-dom/server': (0, _path.resolve)(__dirname, './../../node_modules/react-dom/server'),
      'history': (0, _path.resolve)(__dirname, './../../node_modules/history'),
      'isomorphic-style-loader': 'isomorphic-style-loader'
    }
  },

  module: {
    loaders: [
    // {test: /\.rt$/, loaders: ['react-templates-loader?targetVersion=0.14.0'], include: path.join(__dirname, 'src')},

    // JK - commented this out, hoping it routes to webpack properly
    // {
    //   test: /\.jsx?$/,
    //   exclude: /(node_modules|bower_components|sails-hook-react-router|sails-hook-react)/,
    //   loaders: ['react-hot'],
    //   include: resolve(__dirname, './../../src/app')
    // },
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components|sails-hook-react-router|sails-hook-react)/,
      loader: 'babel',
      query: {
        plugins: []
      }
    }, {
      test: /\.s?css$/,
      loaders: ['isomorphic-style-loader', 'css-loader?' + JSON.stringify({
        sourceMap: DEBUG,
        // CSS Modules https://github.com/css-modules/css-modules
        modules: true,
        localIdentName: DEBUG ? '[name]_[local]_[hash:base64:5]' : '[hash:base64:4]',
        // localIdentName: DEBUG ? '[name]_[local]' : '[hash:base64:4]',
        // CSS Nano http://cssnano.co/options/
        minimize: !DEBUG
      }),
      // 'postcss-loader?parser=postcss-scss',
      'sass-loader?sourceMap']
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.txt$/,
      loader: 'raw-loader'
    }, {
      //   test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      //   loader: 'url-loader?limit=10000'
      // }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'file-loader'
    }, {
      test: /\.(eot|ttf|wav|mp3)$/,
      loader: 'file-loader'
    }, {
      test: /\.jade$/,
      loader: 'jade-loader'
    }]
  },

  postcss: function plugins(bundler) {
    return [require('postcss-import')({ addDependencyTo: bundler }), require('precss')(), require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS })];
  }
};

var defaultConfig2 = defaultConfig;

var developmentClient = (0, _extend2.default)(true, {}, defaultConfig, {
  entry: ['webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  (0, _path.resolve)(__dirname, './../../src/app/index')],

  output: {
    path: (0, _path.resolve)(__dirname, './../.tmp/public/js'),
    filename: 'bundle-[hash].js',
    publicPath: 'http://localhost:3000/'
  },

  // Choose a developer tool to enhance debugging
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: DEBUG ? 'eval' : false,

  target: 'web',

  node: {
    // console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  browser: {
    net: false,
    tls: false,
    'sails-hook-webpack': false,
    'sails-hook-react': false,
    'sails-hook-react-router': false
  },

  plugins: [].concat(_toConsumableArray(defaultConfig.plugins), [new _webpack2.default.HotModuleReplacementPlugin(), new _webpack2.default.NoErrorsPlugin(), new _webpack2.default.DefinePlugin(_extends({}, GLOBALS, { __CLIENT__: true, __SERVER__: false })),
  // assets list into sails config so we can access them in sails
  new _assetsWebpackPlugin2.default({
    path: (0, _path.resolve)(__dirname, './../../dist/config'),
    filename: 'assets.js',
    processOutput: function processOutput(x) {
      return 'module.exports.assets = ' + JSON.stringify(x) + ';';
    }
  }), new _webpack2.default.optimize.DedupePlugin(), new _webpack2.default.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: VERBOSE
    }
  }), new _webpack2.default.optimize.AggressiveMergingPlugin(), new _linkerWebpackPlugin2.default({
    entry: './src/views/layout.ejs',
    hash: '[hash]',
    output: './dist/views/layout.ejs',
    data: {
      title: 'mytitle',
      css: '',
      scripts: '    <script async src="//localhost:3000/bundle-[hash].js"></script>'
    }
  })])
});

var developmentServerBuild = (0, _extend2.default)(true, {}, defaultConfig2, {
  entry: (0, _path.resolve)(__dirname, './../../src/app/config/routes'),

  output: {
    path: (0, _path.resolve)(__dirname, './../../dist/.tmp/react-router'),
    filename: 'routes.js',
    libraryTarget: 'commonjs2',
    publicPath: 'http://localhost:3000/'
  },

  target: 'async-node',

  externals: [(0, _webpackNodeExternals2.default)()],

  node: {
    net: false,
    tls: false,
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },

  devtool: DEBUG ? 'cheap-module-eval-source-map' : false,

  plugins: [].concat(_toConsumableArray(defaultConfig2.plugins), [new _webpack2.default.DefinePlugin(_extends({}, GLOBALS, { __CLIENT__: false, __SERVER__: true })), new _webpack2.default.optimize.DedupePlugin(), new _webpack2.default.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: VERBOSE
    }
  }), new _webpack2.default.optimize.AggressiveMergingPlugin(), new _webpack2.default.BannerPlugin('require("source-map-support").install();', {
    raw: true, entryOnly: false
  })])
});

developmentServerBuild.module.loaders.shift();

exports.default = {
  webpack: {
    config: developmentServerBuild,
    development: {
      webpack: developmentClient,
      config: {
        port: 3000
      }
    },
    watchOptions: {
      aggregateTimeout: 300
    }
  }
};
module.exports = exports['default'];