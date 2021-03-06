const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const postcssConfig = require('./postcss.config.js');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const DEV_DIR = path.resolve(__dirname, 'dev/script/');

const config = {
    entry: [
        'whatwg-fetch',
        `${DEV_DIR}/app.jsx`,
    ],
    output: {
        path: BUILD_DIR,
        filename: 'app.js',
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'file?name=[name].[ext]',
        }, {
            test: /\.json$/,
            loader: 'json',
        }, {
            test: /\.jsx?/,
            include: DEV_DIR,
            loader: 'babel',
        }, {
            test: /\.css$/,
            loader: 'style!css?sourceMap!',
        }, {
            test: /\.scss$/,
            loader: 'style!css?sourceMap!postcss!sass',
        }, {
            test: /\.(jpg|jpeg|png|gif)$/,
            loader: 'url-loader?mimetype=image/png',
        }],
    },
    devtool: 'eval-source-map',
    postcss: postcssConfig,
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.scss',
            disable: false,
            allChunks: true,
        }),
    ],
    devServer: {
        contentBase: './dev',
        port: 9000,
        colors: true,
        historyApiFallback: true,
        inline: true,
        open: true,
    },
};

module.exports = config;
