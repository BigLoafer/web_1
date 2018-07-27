var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlwebpackPLugin = require('html-webpack-plugin');

var root_path = path.resolve(__dirname);
var app_path = path.resolve(root_path, "src");
var build_path = path.resolve(root_path, "build");

module.exports = {
    entry: [
         'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        app_path // Your appʼs entry point
    ], //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: build_path, // 输出的路径
        filename: '[hash]-bundle.js' ,// 打包后文件
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-2', 'react'],
                        plugins: [
                            ["import", {
                                "libraryName": "antd-mobile",
                                "style": "css"
                            }]
                        ]
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
            },
            {
                test:/\.scss$/,
                loaders:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    plugins: [
        new HtmlwebpackPLugin({
            filename:"index.html",
            template:"./config/template.html",
            title: 'first react11',
            inject:true,
            favicon:'./src/images/2.jpg'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]

};