'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost',
    port: 8080,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,

    // Use Eslint Loader?
    useEslint: true,
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */
    devtool: 'cheap-module-eval-source-map',
    cacheBusting: true,
    cssSourceMap: true
  },

  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },

  // Configuration for additional HTML pages
  entry: {
    main: '../src/main.js' // Chemin vers votre script JavaScript pour la nouvelle page
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../src/html/projets.html',
      filename: 'projets.html',
      chunks: ['main'] // Nom de l'entrée à inclure dans cette page HTML
    })
  ]
};
