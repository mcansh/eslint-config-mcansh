const readPkgUp = require('read-pkg-up');

const baseConfig = require('./base');

let isNextProject = false;

try {
  const { packageJson } = readPkgUp.sync({ normalize: true });
  const allDeps = Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  });

  isNextProject = allDeps.includes('next');
} catch (error) {
  // ignore error
}

module.exports = {
  extends: [
    ...baseConfig.extends.filter(e => e !== 'airbnb-base'),
    'kentcdodds/react',
    'kentcdodds/jsx-a11y',
    isNextProject ? 'plugin:@next/eslint-plugin-next/recommended' : null,
  ].filter(Boolean),
  plugins: baseConfig.plugins,
  rules: {
    ...baseConfig.rules,

    /**
     * thanks to the new react jsx transform
     * https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
     * `react/jsx-uses-react` and `react/react-in-jsx-scope` can be disabled
     */
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    'react/no-unused-class-component-methods': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-invalid-html-attribute': 'off',
    'react/no-namespace': 'error',
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
