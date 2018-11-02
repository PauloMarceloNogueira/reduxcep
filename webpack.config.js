const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(?:sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
          },
          {
            loader: require.resolve('sass-loader'),
          }
        ]
      }
    ]
  },
  plugins: [new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  })]
};