var path = require('path');

module.exports = {
    entry: [
        'bootstrap-loader',
        path.join(__dirname, 'public', 'src', 'index.js')
    ],
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'vendor.js',
        publicPath: '/public/dist'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css', 'postcss']
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'postcss', 'sass']
        }, {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url?limit=10000"
        }, {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            loader: 'file'
        }, {
            test: /bootstrap-sass\/assets\/javascripts\//,
            loader: 'imports?jQuery=jquery'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                plugins: ['transform-decorators-legacy'],
                presets: ['es2015', 'stage-0']
            }
        }]
    }
}