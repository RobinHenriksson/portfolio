const webpack = require('webpack')

module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  outputDir: './dist/' + process.env.NODE_ENV + '/',
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'ENVIRONMENT': JSON.stringify(process.env.NODE_ENV)
      })
    ]
  }
}
