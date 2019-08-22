const path = require('path');

module.exports = {
  extends: ['./index.js', 'eslint:recommended', 'prettier'],
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'spaced-comment': ['error', 'always', { markers: ['/ <reference'] }],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: path.join(process.cwd(), 'tsconfig.json'),
      },
      rules: {
        // typescript rules
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  rules: {
    // core rules
    'arrow-parens': ['error', 'as-needed'],
    'no-console': 'warn',

    // babel rules
    'babel/camelcase': ['error', { properties: 'never' }],

    // react rules
    'react/display-name': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.tsx'] }],
  },
};
