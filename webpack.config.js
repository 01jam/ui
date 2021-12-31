const path = require("path");

module.exports = {
	mode: "production",
	entry: { index: "./src/index.ts" },
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		path: path.resolve(__dirname, "lib/umd"),
		filename: "[name].js",
		libraryTarget: "umd",
		library: "ui",
		umdNamedDefine: true,
	},
};
