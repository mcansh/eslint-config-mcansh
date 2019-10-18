const tsConfig = require('./typescript');

const { settings, ...config } = tsConfig;

module.exports = {
  ...config,
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
