module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/dist'
    },

    mode: 'development',

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};