const path =  require('path')
const webpackConfig = require('./webpack.config')
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env={},argv) {
    const isProduction = env['production'];
    const plugins = [];
    let config = {}
    if(process.env.NODE_ENV) {
        plugins.push(
            // 压缩输出的 JS 代码
            new UglifyJsPlugin()
          )
        config = merge(webpackConfig,{
            output: {
                filename: 'bundle-[hash:8].js',
                path: path.join(__dirname,'dist')
            },
            plugins:plugins
        })
    } else {
        config = merge(webpackConfig,{
            output: {
                filename: 'bundle.js',
                path: path.join(__dirname,'dist')
            }
        })
    }
    return config
}