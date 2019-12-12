const baseConfig = require('./base');

module.exports = {
  extends: [
    ...baseConfig.extends.filter(e => e !== 'airbnb-base'),
    'kentcdodds/react',
    'kentcdodds/jsx-a11y',
    'prettier/react',
  ],
  rules: {
    ...baseConfig.rules,
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
