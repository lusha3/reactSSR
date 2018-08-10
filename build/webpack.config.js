const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const config = {
    entry: {
        app: path.join(__dirname, '../src/app.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[hash].js',
        publicPath: 'public' //静态资源文件引入时的路径（加在饮用静态资源前面）
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    //配置loader
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, '../src/template.html')
        })
    ]
};


if(isDev){
    config.devServer = {
        host: '0.0.0.0',
        port: '8888',
        contentBase: path.join(__dirname, '../dist'),
        overlay: {
            errors: true
        },
        publicPath: '/public',
        historyApiFallback: {
            index: '/public/index.html'
        }
    }
}

module.exports = config
