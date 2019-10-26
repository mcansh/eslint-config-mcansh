# eslint-config-mcansh

An eslint config based on airbnb's with common rule changes I make.

## Installation

```bash
$ yarn add -D eslint-config-mcansh
```

then install the peerDependencies

```bash
$ install-peerdeps @mcansh/eslint-config
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
  extends: ['@mcansh/base'],
};
```
