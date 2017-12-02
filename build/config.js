var path = require('path')

module.exports = {
    env: {
        NODE_ENV: process.env.NODE_ENV === 'production' ? 'production' : 'develop',
    },
    distDir: path.resolve(__dirname, '../public'),
    srcDir: path.resolve(__dirname, '../src'),
}