var webpack = require('webpack');

module.exports = {
    entry: {
        app: './app/app.js',
        vendor: ['angular', 'angular-animate', 'angular-aria', 'angular-material',
            'angular-ui-router', 'angular-data-table']
    },
    output: {
        path:'./js',
        filename: 'app.bundle.js',
        publicPath: '/js/'
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
    devServer:{
        inline: true
    },
    debug: true,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};