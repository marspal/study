const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack4-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin'); // 优化耗时分析
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // 顾名思义就是创建一个新进程,专门来运行Typescript类型检查
const webpackConfigBase = require('./webpack.base.config');
const mockMiddleware = require('./mock.config');

const smp = new SpeedMeasurePlugin();

const PORT = 8081;
const webpackConfigDev = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'React APP',
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html'),
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/#/`,
    }),
    // new ForkTsCheckerWebpackPlugin(),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    historyApiFallback: false,
    hot: false,
    host: '0.0.0.0',
    port: PORT,
    before(app) {
      const projectDir = path.resolve();
      const mockDir = './mock';
      app.use(mockMiddleware({ projectDir, mockDir }));
    },
  },
};

module.exports = smp.wrap(merge(webpackConfigBase, webpackConfigDev));
// module.exports = merge(webpackConfigBase, webpackConfigDev);
