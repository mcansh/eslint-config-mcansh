module.exports = {
  extends: [
    'airbnb-base',
    'prettier',
    './import.js',
    './compat.js',
    './promise.js',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'import/no-named-export': 'off',
    'no-useless-catch': 'error',
    'no-param-reassign': ['error', { props: false }],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
  },
};
