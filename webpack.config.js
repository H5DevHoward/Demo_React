const webpack = require('webpack');
const path = require('path');

const postcssConfig = require('./postcss.config.js');

const BUILD_DIR = path.resolve(__dirname, 'dev');
const APP_DIR = path.resolve(__dirname, 'dev/script/');

const config = {
    entry: [
        `${APP_DIR}/app.jsx`,
    ],
    output: {
        path: BUILD_DIR,
        filename: 'app.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: APP_DIR,
            loader: 'babel',
        }, {
            test: /\.scss$/,
            loader: 'style!css!postcss!sass',
        }],
    },
    postcss: postcssConfig,
};

module.exports = config;
