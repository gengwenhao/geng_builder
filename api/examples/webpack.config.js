const { VueLoaderPlugin } = require('vue-loader');
const path = require('node:path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './test.scheme.md'),
  output: {
    clean: true,
    filename: 'scheme_component.js',
    path: path.resolve(__dirname, './dist'),
    library: {
      type: 'umd',
      name: 'GengSchemeComponent',
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
      // TMD 由于 VueLoaderPlugin 内部机制，这个还不能删除
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
