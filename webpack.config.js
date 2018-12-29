/**
 * Import
 */
const path = require("path");
const webpackHtml = require("html-webpack-plugin");
const port = process.env.PORT || 3000;

/**
 * Éxecution
 */
module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", path.resolve(__dirname, "src", "app.js")],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app-min.js"
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpackHtml({
            template: "src/index.html",
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: true,
        port: 8080,
        disableHostCheck: true
    }
};