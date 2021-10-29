const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader'); // IT'S OK!

module.exports = {
    devtool: "source-map",
    mode: 'development',
    entry: './index',
    devServer: {
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        // publicPath: "/build/" // ???
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".vue", ".json"],
    },
    module: {
        rules: [

            // {
            //     test: /\.(ts|js)$/,
            //     exclude: /node_modules/, //https://stackoverflow.com/questions/37823764/how-include-and-exclude-works-in-webpack-loader
            //     use: {
            //         loader: "babel-loader",
            //         options: {
            //             presets: ['@babel/preset-env', "@babel/preset-typescript"],
            //         }
            //     }
            // },

            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/,
            },

            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            }

        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: 'index.html'
        }),

        new VueLoaderPlugin(), // IT'S OK!

    ],
};