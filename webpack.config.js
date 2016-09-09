var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['./resources/assets/js/index.js'],
    output: {
        path: __dirname + '/public/js/',
        filename: 'App.js',
    },
    devServer: {
        contentBase: 'public/'
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        require.resolve('babel-preset-es2015'),
                        require.resolve('babel-preset-react'),
                    ]
                }

            }
        ]
    },
    stats: {
        colors: true
    }
};
