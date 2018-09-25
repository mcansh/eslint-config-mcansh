module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    'react/jsx-filename-extension': ['warning', { extensions: ['.js', '.jsx'] }],
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'no-param-reassign': ['error', { props: false }],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['href']
      }
    ],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
  },
};
