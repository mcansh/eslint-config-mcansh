const extensions = ['.js', '.jsx', '.tsx'];

module.exports = {
  extends: [
    './index.js',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    /* react rules */
    'react/jsx-filename-extension': ['warn', { extensions }],

    /* typescript rules */
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],

    /* core rules */
    'no-undef': 'off', // typescript handles this for us
  },
};
