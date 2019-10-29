module.exports = {
  extends: ['./typescript'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/all'],
    },
  ],
};
