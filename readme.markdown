# eslint-config-mcansh

## Installation

```bash
$ yarn add -D @mcansh/eslint-config
```

then install the peerDependencies

```bash
$ npx install-peerdeps @mcansh/eslint-config --dev
```

followed by adding it to your eslint config

for react (javascript)

```javascript
module.exports = {
  extends: ['@mcansh'],
};
```

for react (typescript)

```typescript
module.exports = {
  extends: ['@mcansh/eslint-config/typescript'],
};
```

for everything else

```javascript
module.exports = {
  extends: ['@mcansh/eslint-config/base'],
};
```
