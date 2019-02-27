const jsExtensions = ['.js', '.jsx'];
const tsExtensions = ['.ts', '.tsx'];
const allExtensions = [...jsExtensions, ...tsExtensions];
const reactExtensions = [...jsExtensions, '.tsx'];

module.exports = {
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    './index.js',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': ['.tsx', '.ts'],
    },
    'import/resolver': {
      node: { allExtensions },
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
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
  },
};
