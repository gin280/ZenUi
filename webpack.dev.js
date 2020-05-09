const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
}