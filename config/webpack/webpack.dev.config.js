function buildConfig(configDirs) {
  let devConfig = Object.assign({}, require('./webpack.common.config')(configDirs));
  return devConfig;
}

module.exports = buildConfig;