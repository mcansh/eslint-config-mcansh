module.exports = {
  extends: ['./base.js'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['prettier.config.js'],
      },
    ],
  },
};
