const path = require('path');

const vendor = require('./vendor');
const rules = require('./rules');
const plugins = require('./plugins');
const devServer = require('./devServer');
const devtool = require('./devtool');

const settings = {
	path: {
		extensions: ['*', '.js', '.jsx', '.css', '.scss'],
	},
	context: path.resolve(__dirname, '..'),
	entry: {
		app: [
			'react-hot-loader/patch',
			'babel-polyfill',
			'./src/index'
		],
		vendor,
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, '..', dist),
	},
	module: {
		rules,
	},
	plugins,
	devServer,
	devtool,
};

module.exports = settings;