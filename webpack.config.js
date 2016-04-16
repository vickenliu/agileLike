var path= require('path')

module.exports = {
    entry: "./js/index.js",
    output: {
        path: 'public',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {   test: /\.jade$/, loader: "jade" },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015']
            }
          }
        ]
    }
};
