var path= require('path')

module.exports = {
    entry: "./js/index.js",
    output: {
        path: 'public',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
