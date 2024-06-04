const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.filter(
        (minimizer) => !(minimizer instanceof CssMinimizerPlugin)
      )
      return webpackConfig
    }
  }
}
