var config = require('./config')
var webpack = require('webpack')
var webpackMerge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.base')
var util = require('./util')

module.exports = webpackMerge(webpackBaseConfig, {
    module: {
        rules: [
            {
                test: /\/.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    'postcss-loader',
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    'postcss-loader',
                    'sass-loader',
                ]
            },
        ]
    },

    plugins: [].concat(util.getHtmlPlugin()),

    devtool: '#source-map',
})