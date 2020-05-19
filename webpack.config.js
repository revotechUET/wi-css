const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: __dirname + '/src',
	mode: "development",
	entry: {
		main: "./index.js",
	},
	output: {
		path: __dirname + '/dist',
		filename: 'wi-css.js'
	},
	module: {
		rules: [
			
			{
				test: /\.html$/,
				use: ['html-loader']
			}, {
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			}
		],
	},
	plugins: [
		new HardSourceWebpackPlugin(),
	],
}
