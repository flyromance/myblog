var config = require('./config')
var webpack = require('webpack')
var util = require('./util')

module.exports = {
    entry: util.getJsEntry(),

    output: {
        path: config.distDir,
        filename: '[name].js',
        publicPath: '/static/',
        chunkFilename: '[name].[ext]',
    },

    module: {
        rules: [
            {
                test: /\/.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'], // 使用use就不能使用options单独配置了
            },
            {
                test: /\.art$/,
                exclude: /node_modules/,
                loader: 'art-template-loader',
                options: {
                    
                }
            },
            {
                test: /\.(png|jpg|svg|eot|ttf|woff|woff2)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                    limit: 2000,
                }
            },
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'pages/common',
            // filename: 'common.js',
            minChunks: 5, // 默认为入口数量, 模块被引用数超过这个数值才能被抽离出来
            // chunks: [entry1,], // 指定入口文件
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