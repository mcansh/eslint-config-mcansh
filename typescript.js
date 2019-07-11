const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = jsExtensions.concat(tsExtensions);
const reactExtensions = jsExtensions.concat(['.tsx']);

module.exports = {
  extends: [
    './index.js',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
    'import/resolver': {
      node: {
        extensions: allExtensions,
      },
    },
  },
  rules: {
    /* core rules */
    'no-undef': 'off', // typescript handles this for us

    /* react rules */
    'react/jsx-filename-extension': ['warn', { extensions: reactExtensions }],

    /* typescript rules */
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { ignoreRestSiblings: true, argsIgnorePattern: 'res|next|^err|^_' },
    ],
    '@typescript-eslint/explicit-member-accessibility': 'off',
  },
};
