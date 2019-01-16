module.exports = {
  extends: ['./index.js', 'plugin:jsx-a11y/strict'],
  plugins: ['jest', 'react-hooks'],
  parser: 'pluggable-babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    plugins: ['typescript'],
  },
  settings: {
    'import/parsers': {
      'typescript-eslint-parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/default': 'error',
    'import/order': 'error',
    'import/export': 'error',
    'import/newline-after-import': 'error',
    'import/extensions': ['error', 'never', { svg: 'always', json: 'always' }],
    'import/first': 'error',
    'import/no-absolute-path': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/prefer-default-export': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'error',
    'no-undef': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        parser: 'typescript',
      },
    ],
  }
}
