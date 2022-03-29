require('@rushstack/eslint-patch/modern-module-resolution');

const { hasDep } = require('./_utils');

const hasJest = hasDep('jest');
const hasLodash = hasDep('lodash');

module.exports = {
  extends: [
    'airbnb-base',
    'kentcdodds',
    'kentcdodds/import',
    hasJest ? 'kentcdodds/jest' : null,
    hasLodash ? 'plugin:you-dont-need-lodash-underscore/compatible' : null,
    'prettier',
    'prettier/prettier',
  ].filter(Boolean),
  plugins: ['prettier'],
  // Report unused `eslint-disable` comments.
  reportUnusedDisableDirectives: true,
  // Tell ESLint not to ignore dot-files, which are ignored by default.
  ignorePatterns: ['!.*.js'],
  rules: {
    'no-negated-condition': 'off',
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

    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
};
