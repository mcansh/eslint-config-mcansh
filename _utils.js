const readPkgUp = require('read-pkg-up');

const depCache = new Set();

function loadDeps() {
  try {
    const { packageJson } = readPkgUp.sync({ normalize: true });
    depCache.add(
      ...Object.keys({
        ...packageJson.peerDependencies,
        ...packageJson.devDependencies,
        ...packageJson.dependencies,
      })
    );
  } catch (error) {
    // ignore error
  }
}

function hasDep(dep) {
  if (depCache.size === 0) {
    loadDeps();
  }

  return depCache.has(dep);
}

module.exports = { hasDep };
