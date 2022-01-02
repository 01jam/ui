import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
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

export default config;
