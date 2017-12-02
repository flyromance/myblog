var config = require('./config')
var webpack = require('webpack')
var webpackMerge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.base')
var extractCssPlugin = require('extract-text-webpack-plugin')
var extractScssPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = webpackMerge(webpackBaseConfig, {

    module: {
        rules: [
            {
                test: /\/.css/,
                use: extractCssPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        ['css-loader', {
                            importModule: 1,
                        }],
                        ['postcss-loader', {
                            plugins: [autoprefixer]
                        }]
                    ]
                })
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                use: extractScssPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        ['css-loader', {
                            importModule: 1,
                        }],
                        ['postcss-loader', {
                            plugins: [autoprefixer]
                        }],
                        ['sass-loader']
                    ]
                })
            },
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new extractCssPlugin({
            name: '[name].css'
        }),
        new extractScssPlugin({
            name: '[name].css'
        }),
    ]
})