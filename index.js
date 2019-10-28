module.exports = {
  extends: [
    'airbnb',
    'kentcdodds/possible-errors',
    'kentcdodds/best-practices',
    'kentcdodds/stylistic',
    'kentcdodds/es6',
    'kentcdodds/import',
    'kentcdodds/react',
    'kentcdodds/jsx-a11y',
    'kentcdodds/jest',
    'prettier',
    'prettier/react',
  ],
  rules: {
    'no-negated-condition': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'max-lines-per-function': 'off',
    complexity: 'off',
    'one-var': ['error', 'never'],
    'no-underscore-dangle': ['error', { allow: ['__NEXT_DATA__'] }],

    'babel/camelcase': 'off',
    'babel/quotes': 'off',

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],

    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/extensions': ['error', 'never', { svg: 'always', json: 'always' }],

    'jest/valid-title': 'error',
    'jest/require-to-throw-message': 'error',
    'jest/no-empty-title': 'off',
  },
};
