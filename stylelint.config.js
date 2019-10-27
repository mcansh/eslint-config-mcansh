module.exports = {
  processors: [
    'stylelint-processor-styled-components',
    {
      moduleName: 'styled-components',
      importName: 'default',
      strict: false,
      ignoreFiles: [],
      parserPlugins: [
        'jsx',
        'objectRestSpread',
        ['decorators', { decoratorsBeforeExport: true }],
        'classProperties',
        'exportExtensions',
        'asyncGenerators',
        'functionBind',
        'functionSent',
        'dynamicImport',
        'optionalCatchBinding',
        'optionalChaining',
        'nullishCoalescingOperator',
      ],
    },
  ],
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
