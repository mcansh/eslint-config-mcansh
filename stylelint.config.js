module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
  },
};
