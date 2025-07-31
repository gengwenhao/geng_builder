const { VueLoaderPlugin } = require('vue-loader');
const path = require('node:path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'web', // 明确指定目标环境
  entry: path.resolve(__dirname, './test.scheme.md'),
  stats: 'errors-warnings', // 精简控制台输出
  infrastructureLogging: {
    level: 'error', // 只显示错误日志
  },
  output: {
    clean: true,
    filename: 'scheme_component.js',
    path: path.resolve(__dirname, './dist'),
    library: {
      type: 'umd',
      name: 'GengSchemeComponent',
    },
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.cache/webpack'),
    buildDependencies: {
      config: [__filename],
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
    moduleIds: 'deterministic',
    chunkIds: 'deterministic',
  },
  module: {
    rules: [
      {
        test: /\.scheme.md$/,
        use: [
          'vue-loader',
          {
            loader: require.resolve('./scheme-md-loader'),
          },
        ],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
