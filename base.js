module.exports = {
  extends: [
    'airbnb-base',
    'kentcdodds/jest',
    'kentcdodds/import',
    'plugin:promise/recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: ['import', 'promise'],
  rules: {
    /* import rule */
    'import/no-named-export': 'off',

    /* promise rules */
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': 'error',

    /* core rules */
    'no-param-reassign': ['error', { props: false }],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'no-useless-catch': 'error',

    /* jest rules */
    'jest/prefer-called-with': 'error',
  },
};
