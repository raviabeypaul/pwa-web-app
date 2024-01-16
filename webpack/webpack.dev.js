const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = {
    mode : 'development',
    devServer: {
        hot : true,
        https: true
    },
    plugins : [new ReactRefreshWebpackPlugin()],
    devtool : 'cheap-module-source-map',

}