const { VueLoaderPlugin } = require('vue-loader');
const path = require('node:path');

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
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
          extractComments: false,
        }).apply(compiler);
      },
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
