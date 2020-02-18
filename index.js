const baseConfig = require('./base');

module.exports = {
  extends: [
    ...baseConfig.extends.filter(e => e !== 'airbnb-base'),
    'kentcdodds/react',
    'kentcdodds/jsx-a11y',
    'prettier/react',
  ],
  plugins: baseConfig.plugins,
  rules: {
    ...baseConfig.rules,
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/jsx-no-script-url': [
      'error',
      [
        {
          name: 'Link',
          props: ['hrefLeft', 'hrefRight'],
        },
      ],
    ],
    'react/function-component-definition': 'off',
    'react/no-adjacent-inline-elements': 'error',
  },
};
