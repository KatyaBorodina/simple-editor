https://www.valentinog.com/blog/react-webpack-babel/

npm i --save-dev:
webpack
webpack-cli
@babel/core
babel-loader
@babel/preset-env
@babel/preset-react

.babelrc:
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}

webpack.config.js rule:
{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
