const merge = require('webpack-merge');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

function buildConfig(configDirs) {
  return merge(
    Object.assign({}, require('./webpack.common.config')(configDirs)),
    {
      plugins:{
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              mangle: {
                keep_fnames: true,
              },
            }
          }),
        ],
      }
    });
}

module.exports = merge(buildConfig);