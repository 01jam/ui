import * as path from "path";
import * as webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const esmConfig: webpack.Configuration = {
	experiments: { outputModule: true },
	output: {
		path: path.resolve(__dirname, "lib/esm"),
		filename: "[name].js",
		library: {
			type: "module",
		},
	},
};

const cjsConfig: webpack.Configuration = {
	output: {
		path: path.resolve(__dirname, "lib/cjs"),
		filename: "[name].js",
		library: {
			type: "commonjs",
		},
	},
};

const umdConfig: webpack.Configuration = {
	output: {
		path: path.resolve(__dirname, "lib/umd"),
		filename: "[name].js",
		library: {
			type: "umd",
			name: "ui",
			umdNamedDefine: true,
		},
	},
};

const commonConfig: webpack.Configuration = {
	entry: {
		index: "./src/index.ts",
	},
	mode: "production",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					// MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
					"import-glob-loader",
				],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
};

const config = [
	{ ...commonConfig, ...esmConfig },
	{ ...commonConfig, ...cjsConfig },
	{ ...commonConfig, ...umdConfig },
];

export default config;
