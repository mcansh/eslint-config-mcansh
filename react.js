// https://github.com/kentcdodds/eslint-config-kentcdodds

const readPkgUp = require('read-pkg-up');
const semver = require('semver');

let oldestSupportedReactVersion = '16.5.2';

try {
  const pkg = readPkgUp.sync({ normalize: true });
  // eslint-disable-next-line prefer-object-spread
  const allDeps = Object.assign(
    { react: '16.5.2' },
    pkg.peerDependencies,
    pkg.devDependencies,
    pkg.dependencies
  );
  const [version] = semver
    .validRange(allDeps.react)
    .replace(/[>=<|]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .sort(semver.compare);
  oldestSupportedReactVersion = version;
} catch (error) {
  // ignore error
}

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    './base.js',
    './jsx-a11y.js',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: oldestSupportedReactVersion,
    },
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier', 'react-hooks', 'jest'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'no-param-reassign': ['error', { props: false }],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'react/jsx-fragments': ['error', 'syntax'],
    'no-useless-catch': 'error',
  },
};
