var HtmlWebpackPlugin = require('html-webpack-plugin');

function buildConfig(configDirs) {
  return {
    entry: configDirs.APP_DIR + '/index.jsx',
    output: {
      path: configDirs.BUILD_DIR,
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules :[
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.jsx$/,
          use : 'babel-loader'
        }
      ]
    },
    devServer: {
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
         template: configDirs.APP_DIR + '/index.html'
      })
    ],
  };
}

module.exports = buildConfig;