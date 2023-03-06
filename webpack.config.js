const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')


module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[
            // SASS loader
            {
                test:  /\.(sa|c|sc)ss$/, // REGEX
                use: [
                    MiniCssExtract.loader,
                    'css-loader',
                    'sass-loader',
            ]
            },
            // CSS loader
            {
                test:  /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            // JS/BABEL loader
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // IMAGE loader
            {
                test: /\.(jpeg|jpg|png|svg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            }

        ]
    },
    plugins: [
        new HtmlWebpack({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new MiniCssExtract({
            filename: 'style.css'
        })

    ]
    

}