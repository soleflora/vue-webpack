const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin") ;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname,'../src/index.js'),
    output: {
        filename: 'bundle-[hash:8].js',
        path: path.join(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(css|less)$/,
                loader:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'true'
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash:8].css',
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin()
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        hot: true,
        open: true,
        compress: true,
        stats: "errors-only"
    }
}