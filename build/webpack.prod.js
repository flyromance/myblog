var config = require('./config')
var webpack = require('webpack')
var webpackMerge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.base')
var extractTextPlugin = require('extract-text-webpack-plugin')
var util = require('./util')

module.exports = webpackMerge(webpackBaseConfig, {

    module: {
        rules: [
            {
                test: /\/.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoader: 1
                            }
                        },
                        'postcss-loader',
                    ]
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoader: 1
                            }
                        },
                        'postcss-loader',
                        'sass-loader',
                    ]
                })
            },
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new extractTextPlugin({
            filename: '[name].css'
        }),
    ].concat(util.getHtmlPlugin())
})