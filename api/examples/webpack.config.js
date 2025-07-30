const { VueLoaderPlugin } = require('vue-loader');
const path = require('node:path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './HelloGeng.vue'),
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    library: {
      type: 'umd',
      name: 'HelloGeng',
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
