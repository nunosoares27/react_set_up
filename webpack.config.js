const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: ["./src/js/App.js"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/main.js",
    publicPath: "/dist/"
  },
  devServer: {
  contentBase: "/Users/nuno/Desktop/cursoNunoReact/video1"
},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    // o UglifyJsPlugin tem de ter o parametro mangle false
    // caso contrário dá erros com o react
  new UglifyJsPlugin({
    uglifyOptions: {
          warnings: true,
          parse: {},
          compress: {},
          mangle: false,
          output: {
            comments: false,
            beautify: false,

          },
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        }
  }),
],
    mode: 'production'

};
