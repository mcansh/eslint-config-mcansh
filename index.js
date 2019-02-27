const readPkgUp = require('read-pkg-up');
const semver = require('semver');

let oldestSupportedReactVersion = '16.8.0';

try {
  const pkg = readPkgUp.sync({ normalize: true });
  const allDeps = Object.assign(
    { react: '16.8.0' },
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
  extends: ['airbnb', 'plugin:jsx-a11y/strict', 'prettier/react', './base.js'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: '2019',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: oldestSupportedReactVersion,
    },
  },
  rules: {
    /* react rules */
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-fragments': ['error', 'syntax'],

    /* react-hooks rules */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    /* jsx-a11y rules */
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
