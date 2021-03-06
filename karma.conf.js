var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        browsers:   ['Chrome'],
        frameworks: ['mocha', 'chai'],
        reporters:  ['mocha', 'html'],

        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        colors: true,
        port: 9876,

        basePath: '',
        files: ['webpack.karma.context.js',
            'https://www.gstatic.com/firebasejs/4.0.0/firebase.js',
            'https://cdn.firebase.com/libs/angularfire/2.3.0/angularfire.min.js',
            'node_modules/firebase-mock/browser/firebasemock.js',
            'node_modules/firebase/firebase.js'
        ],
        preprocessors: { 'webpack.karma.context.js': ['webpack'] },
        exclude: [],
        webpack: {
            devtool: 'eval',
            module: {
                loaders: [
                    {test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/},
                    {test: /\.css$/, loader: 'style!css'},
                    {test: /\.tpl.html/, loader: 'html'},
                    {test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, loader: 'url?limit=50000'}
                ]
            },
            plugins: [
                new webpack.ProvidePlugin({
                    'window.jQuery': 'jquery'
                })
            ]
        },
        webpackMiddleware: {
            noInfo: true
        }
    });
};
