const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main : "./index.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Hometask 1",
            template: "./index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "images"
                }
            }
        ]
    }
}