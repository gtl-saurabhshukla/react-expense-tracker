const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            }
        ],
    },
    devServer: {
        port: 3000,
        hot: true,
        proxy: {
            '/api': 'https://localhost:5000',
        },
    },
    output: {
        filename: 'index_bundle.js',
        path: path.resolve(__dirname, 'dist/build'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Expense Tracker',
            favicon: "src/assets/images/faviconColor.svg",
            template: './src/index.html'
        })
    ]
}