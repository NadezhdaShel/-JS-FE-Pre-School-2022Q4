const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;



module.exports = {
    mode,
    target,
    devtool,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'index.js',
        assetModuleFilename: 'assets/[name][ext]'
        // filename: 'index.[contenthash].js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/image/[name][ext]'
                }
            },
            {
                test: /\.(?:svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/svg/[name][ext]'
                }
            },
            {
                test: /\.(?:mp3|wav|ogg|mp4)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/sounds/[name][ext]'
                }
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    // MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: [['postcss-preset-env']],
                    //         },
                    //     },
                    // },
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "data.json",
                    to: 'assets/',
                }
            ],
        }),
    ],
    // optimization: {
    //     minimize: true
    // },
    devServer: {
        compress: true,
        port: 3000,
        open: true,
        hot: true,
    }
}