const path = require("path");

module.exports = {
    entry: require.resolve("./src/client/index"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};