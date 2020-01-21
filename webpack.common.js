const path  = require('path');
const HWP   = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DWP   = require('dotenv-webpack');
const webpack = require("webpack");
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

require("@babel/polyfill");

module.exports = {

    // Entry Point
    entry   : ["@babel/polyfill", path.join(__dirname, '/index.js')],

    // Output Point
    output  : {
        filename    : 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        chunkFilename: '[name].js',
    },

    // Disable Caching
    cache: false,

    // Optimizer
    optimization: {
        minimizer: [
            new TerserJSPlugin({}), 
            new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    chunks: 'all',
                    test: /node_modules/
                },
                common: {
                    name: 'common',
                    chunks: 'async',
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    },

    // Module Point
    module  : {
        // Module Rules Point
        rules       : [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "babel-loader"
                }
            ]
        },{
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader"
                }
            ]
        },{
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[hash].[ext]',
                    }
                }
            ]
        },{
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                { loader: "css-loader", options: { sourceMap: true, importLoaders: 1 } },
                { loader: "sass-loader", options: { sourceMap: true } },

            ],
        },{
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }
            ]
        }]
    },

    // Resolve Path Alias To Use On Import
    resolve: {
        alias: {
            '@src'       : path.resolve(__dirname, 'src/'),
        }
    },

    // Dev Server
    devServer: {
        historyApiFallback: true,
    },

    // Plugins Point
    plugins  : [
        new HWP ({ 
                template    : path.join(__dirname, '/src/template/index.html'),
                filename    : './index.html'
            }),
        new DWP ({ path: './.env.development' }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
    ]
}