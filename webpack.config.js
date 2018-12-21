/**
 * Import
 */
const path = require("path");
const webpackHtml = require("html-webpack-plugin");

/**
 * Éxecution
 */
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "app.js"),
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
    ]
};