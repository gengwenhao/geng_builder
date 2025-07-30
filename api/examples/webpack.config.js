const { VueLoaderPlugin } = require('vue-loader');
const path = require('node:path');

module.exports = {
  cache: false,
  mode: 'development',
  entry: path.resolve(__dirname, './test.scheme.md'),
  output: {
    clean: true,
    filename: 'scheme_component.js',
    path: __dirname + '/dist',
    library: {
      type: 'umd',
      name: 'GengSchemeComponent',
    },
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
