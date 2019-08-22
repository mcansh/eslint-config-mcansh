module.exports = {
  extends: [
    'kentcdodds',
    'kentcdodds/react',
    'kentcdodds/jsx-a11y',
    'kentcdodds/jest',
  ],
  rules: {
    // fixes a false positive for next.js link component https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
};
