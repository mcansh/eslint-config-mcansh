module.exports = {
  extends: [
    'airbnb-base',
    'kentcdodds/possible-errors',
    'kentcdodds/best-practices',
    'kentcdodds/stylistic',
    'kentcdodds/es6',
    'kentcdodds/import',
    'kentcdodds/jest',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'prettier',
  ],
  plugins: ['no-null'],
  rules: {
    'no-negated-condition': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'max-lines-per-function': 'off',
    complexity: 'off',
    'one-var': ['error', 'never'],
    'no-underscore-dangle': ['error', { allow: ['__NEXT_DATA__'] }],
    'no-console': ['error', { allow: ['warn', 'error'] }],

    'no-null/no-null': 2,

    'babel/camelcase': 'off',
    'babel/quotes': 'off',

    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/extensions': ['error', 'never', { svg: 'always', json: 'always' }],
  },
};
