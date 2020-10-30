const readPkgUp = require('read-pkg-up');

const prettier = require('./prettier.config');

let hasJest = false;
let hasLodash = false;

try {
  const { packageJson } = readPkgUp.sync({ normalize: true });
  const allDeps = Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  });

  hasJest = allDeps.includes('jest');
  hasLodash = allDeps.includes('lodash');
} catch (error) {
  // ignore error
}

module.exports = {
  extends: [
    'airbnb-base',
    'kentcdodds/possible-errors',
    'kentcdodds/best-practices',
    'kentcdodds/stylistic',
    'kentcdodds/es6',
    'kentcdodds/import',
    hasJest ? 'kentcdodds/jest' : null,
    hasLodash ? 'plugin:you-dont-need-lodash-underscore/compatible' : null,
    'prettier',
  ].filter(Boolean),
  plugins: ['prettier'],
  rules: {
    'no-negated-condition': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'max-lines-per-function': 'off',
    complexity: 'off',
    'one-var': ['error', 'never'],
    'no-underscore-dangle': ['error', { allow: ['__NEXT_DATA__'] }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'default-case-last': 'error',
    'no-restricted-exports': 'error',
    'no-useless-backreference': 'error',
    'no-loss-of-precision': 'error',
    'id-denylist': 'off',
    'no-promise-executor-return': 'error',
    'no-unreachable-loop': 'error',

    'babel/camelcase': 'off',
    'babel/quotes': 'off',

    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/extensions': ['error', 'never', { svg: 'always', json: 'always' }],

    'prettier/prettier': ['error', prettier],

    'jest/no-done-callback': 'error',
  },
};
