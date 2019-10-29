const { overrides, ...config } = require('./typescript');

const [typeDefs, tsOverides] = overrides;

const tsOverideExtends = tsOverides.extends.filter(
  ex => ex !== 'plugin:@typescript-eslint/recommended'
);

module.exports = {
  ...config,
  overrides: [
    typeDefs,
    {
      ...tsOverides,
      extends: ['plugin:@typescript-eslint/all', ...tsOverideExtends],
    },
  ],
};
