var config = require('./config')
var webpack = require('webpack')
var webpackMerge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.base')
var extractTextPlugin = require('extract-text-webpack-plugin')
var util = require('./util')

module.exports = webpackMerge(webpackBaseConfig, {
    module: {
        rules: [
            // {
            //     test: /\/.css$/,
            //     exclude: /node_modules/,
            //     use: extractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 // options: {
            //                 //     sourceMap: true,
            //                 // }
            //             },
            //             // 'postcss-loader',
            //         ]
            //     })
            // },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            // options: {
                            //     sourceMap: true,
                            // }
                        },
                        // 'postcss-loader',
                        'sass-loader',
                    ]
                })
            },
        ]
    },

    plugins: [
        new extractTextPlugin({
            filename: '[name].css'
        }),
    ].concat(util.getHtmlPlugin()),

    devtool: '#source-map',
})
