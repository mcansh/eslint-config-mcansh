const path = require('path');

module.exports = {
  extends: ['./index.js', 'eslint:recommended'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
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
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'prettier/@typescript-eslint',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: path.join(process.cwd(), 'tsconfig.json'),
      },
      rules: {
        'react/prop-types': 'off', // handled by using `React.FC<Props>` and `React.VFC<Props>`

        /**
         * enforce `import type` style imports
         */
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports' },
        ],
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': 'error',

        /**
         * resolves https://github.com/typescript-eslint/typescript-eslint/issues/2502
         */
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        
        '@typescript-eslint/array-type': ['error', { default: 'generic', readonly: 'generic' }],

        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^ignored',
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { 
            prefer: 'type-imports'
          },
        ],
      },
    },
  ],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.tsx'] }],
  },
};
