const mainConfig = require('./index');

module.exports = {
  extends: mainConfig.extends.unshift('airbnb-base'),
  ...mainConfig,
};
