module.exports = {
  extends: [
    'airbnb-base',
    'plugin:compat/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: ['import', 'prettier', 'promise', 'jest', 'compat'],
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
