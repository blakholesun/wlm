var webpack = require('webpack');

module.exports = {
    entry: {
        app: './app/app.js',
        vendor: ['angular', 'angular-animate', 'angular-aria', 'angular-material', 'angular-ui-router']
    },
    output: {
        path:'./js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {   test: /\.html$/,
                loader: 'html-loader'
            },
            {   test: /\.css$/,
                loader: 'style!css'
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};