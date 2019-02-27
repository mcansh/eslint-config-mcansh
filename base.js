module.exports = {
  extends: [
    'airbnb-base',
    'kentcdodds/jest',
    'plugin:compat/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: ['import', 'prettier', 'promise', 'compat'],
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

    /* prettier */
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
  },
};
