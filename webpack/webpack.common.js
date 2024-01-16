const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack')
const {InjectManifest} = require('workbox-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve : {
        extensions : ['.tsx', '.ts', '.js'],
    },
    module : {
        rules : [
            {
                test: /\.(ts|js)x?$/,
                exclude : /node_modules/,
                use : [
                    {
                        loader : 'babel-loader'
                    }
                ]
            },
            {
                test : /\.css$/,
                use : ['style-loader','css-loader']
            },
            // {
            //     test : /\.(?:ico|gif|png|jpg|jpeg)$/i,
            //     type: 'asset/resource'
            // },
            {
                test :/\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline'
            },{
                test: /\.(png|jpeg|jpg|svg|gif)?$/,
                use : 'file-loader?name=./assets/[name].[ext]'
            }
        ]
    },
    output : {
        path : path.resolve(__dirname, '..', './build'),
        filename : 'bundle.js'
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname,'..','./src/index.html')
        }),
        new DotEnv(),
        new InjectManifest({
            swSrc: './src/sw.js',
            swDest : 'sw.js'
        }),
        new CopyPlugin({
            patterns : [
                {
                    from : "./src/assets", to:"./assets"
                }
            ]
        })
    ]
}