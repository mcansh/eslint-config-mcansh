const path = require('path');

module.exports = {
  extends: [
    './index.js',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
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
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: path.join(process.cwd(), 'tsconfig.json'),
      },
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': [
          2,
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^ignored',
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],
      },
    },
  ],
  rules: {
    // react rules
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.tsx'] }],
  },
};
