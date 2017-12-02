var config = require('./config')
var webpack = require('webpack')
var webpackMerge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.base')

module.exports = webpackMerge(webpackBaseConfig, {

    module: {
        rules: [
            {
                test: /\/.css/,
                use: [
                    'style-loader'
                    ['css-loader', {
                        importModule: 1,
                    }],
                    ['postcss-loader', {
                        plugins: [autoprefixer]
                    }]
                ]
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                use: [
                    'style-loader'
                    ['css-loader', {
                        importModule: 1,
                    }],
                    ['postcss-loader', {
                        plugins: [autoprefixer]
                    }],
                    'sass-loader'
                ]
            },
        ]
    },

    devtool: '#source-map',
})