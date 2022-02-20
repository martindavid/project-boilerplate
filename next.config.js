/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withPlugins = require('next-compose-plugins')
const withSourceMaps = require('@zeit/next-source-maps')({
  devtool: 'nosources-source-map',
})
const RollbarSourceMapPlugin = require('rollbar-sourcemap-webpack-plugin')

const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  webpack(config, { webpack, dev, buildId }) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    )

    if (!dev) {
      /* eslint-disable-next-line no-param-reassign */
      config.output.futureEmitAssets = false
      const codeVersion = JSON.stringify(buildId)
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.NEXT_PUBLIC_BUILD_ID': codeVersion,
        }),
      )
      config.plugins.push(
        new RollbarSourceMapPlugin({
          accessToken: NEXT_PUBLIC_ROLLBAR_SERVER_TOKEN,
          version: codeVersion,
          publicPath: NEXT_PUBLIC_ASSET_PUBLIC_PATH,
        }),
      )
    }

    return config
  },
}

const nextPlugins = [withVanillaExtract, withSourceMaps]

module.exports = withPlugins(nextPlugins, nextConfig)
