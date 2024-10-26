const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('resources', `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

module.exports = { getConfigurationByFile };