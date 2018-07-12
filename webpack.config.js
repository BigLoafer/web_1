var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, './build'), // 输出的路径
        filename: 'bundle.js' // 打包后文件
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-2', 'react'],
                }
            },
            exclude: /node_modules/
        }, {
            test: /\.jpg/,
            loader: "url-loader?limit=10000&mimetype=image/jpg"
        }, 
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }
    ]
    },

};