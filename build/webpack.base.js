var config = require('./config')
var webpack = require('webpack')
var util = require('./util')

module.exports = {
    entry: util.getJsEntry(),

    output: {
        path: config.distDir,
        filename: '[name].js',
        publicPath: '/static/',
    },

    module: {
        rules: [
            {
                test: /\/.js/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|svg)/,
            },
            {
                test: /\.art/,
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'pages/common',
            minChunks: 5,
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(config.env.NODE_ENV),
        })
    ],

    resolve: {
        // extension: [],
        alias: {
            '@': config.srcDir,
        },
        // modules: [],
        // mainFields: [],
    },

    externals: {
        'jquery': 'jQuery',
    },

    target: 'web',
}