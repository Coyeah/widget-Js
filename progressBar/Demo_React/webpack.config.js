const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: "./public/"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader','css-loader','sass-loader']
			}
		]
	}
}