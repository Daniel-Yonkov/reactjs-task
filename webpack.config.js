const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/main.js",
	output: {
		path: path.join(__dirname, "/bundle"),
		filename: "index_bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader"]
			},
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	],
	devServer: {
		port: 8080
	}
};
