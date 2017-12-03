var path = require('path')
const baseDir = path.resolve(__dirname, '..')
const distDir = path.join(baseDir, 'public/static')
const srcDir = path.join(baseDir, 'src')
const viewSrcDir = path.join(baseDir, 'views_src')
const viewDir = path.join(baseDir, 'views')

module.exports = {
    env: {
        NODE_ENV: process.env.NODE_ENV === 'production' ? 'production' : 'develop',
    },
    baseDir: baseDir,
    distDir: distDir,
    srcDir: srcDir,
    viewSrcDir: viewSrcDir,
    viewDir: viewDir,
    dll: {
        
    }
}
