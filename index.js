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
    './common.js',
    'prettier',
    'prettier/react',
  ],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/jsx-pascal-case': 'off',
  },
};
