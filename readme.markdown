# eslint-config-mcansh

An eslint config based on airbnb's with common rule changes I make.

## Installation

```bash
  yarn add -D eslint-config-mcansh
```

then install the peerDependencies

```bash
  (
    export PKG=eslint-config-mcansh;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add -D "$PKG@latest"
  )
```

followed by adding it to your eslint config

```javascript
module.exports = {
  extends: ['mcansh'],
}
```
