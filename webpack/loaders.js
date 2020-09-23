exports.babelLoader = {
  loader: "babel-loader",
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  // options: {
  //   presets: ["@babel/preset-env", "@babel/preset-react"],
  // },
};

exports.cssLoader = {
  test: /\.((c|sa|sc)ss)$/i,
  exclude: /(node_modules|bower_components)/,
  use: [
    // Creates `style` nodes from JS strings
    "style-loader",
    // Translates CSS into CommonJS
    {
      loader: "css-loader",
      options: {
        importLoaders: 1,
        modules: { auto: true },
      },
    },
    // Compiles Sass to CSS
    "sass-loader",
    {
      loader: "postcss-loader",
      // options: { postcssOptions: { plugins: ["postcss-preset-env", {}] } },
    },
  ],
};
