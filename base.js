module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: ['import', 'prettier'],
  rules: {
    'no-param-reassign': [2, { props: false }],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
  },
};
