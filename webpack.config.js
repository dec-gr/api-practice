// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   mode: "development",
//   entry: "./src/index.js",
//   devtool: "inline-source-map",
//   devServer: {
//     static: "./dist",
//     watchFiles: ["./src/index.html"],
//   },
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         test: /\.(png|svg|jpeg|gif)$/i,
//         type: "asset/resource",
//       },
//       {
//         test: /\.(woff|woff2|eot"ttf"otf)$/i,
//         type: "asset/resource",
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./src/index.html",
//       filename: "index.html",
//       inject: "body",
//     }),
//   ],
//   output: {
//     filename: "[name].bundle.js",
//     path: path.resolve(__dirname, "dist"),
//     clean: true,
//   },
//   optimization: {
//     runtimeChunk: "single",
//   },
// };
