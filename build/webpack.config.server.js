const path = require('path');

module.exports = {
    target: 'node',
    entry: {
        app: path.join(__dirname, '../src/server-entry.js')
    },
    output: {
        filename: 'server-entry.js',
        path: path.join(__dirname, '../dist'),
        publicPath: 'public',
        libraryTarget: 'commonjs2'  //打包出来js模块所使用的方案（umd、amd、cmd、commonIS）
    },
    module: {
        rules: [
            {
                test: /\.(jsx)$/,
                loader: 'babel-loader'
            },{
                test: /\.(js)$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            }
        ]
    }
}