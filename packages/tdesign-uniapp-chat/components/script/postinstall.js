const fs = require('fs');
const path = require('path');


function switchVersion(version) {
  const pkg = require('../package.json');
  if (version != 2) {
    return;
  }

  delete pkg.exports;

  const pkgStr = JSON.stringify(pkg, null, 2);

  fs.writeFileSync(path.resolve(__dirname, '../package.json'), pkgStr, 'utf-8');
}


function loadModule(name) {
  try {
    return require(name);
  } catch (e) {
    return undefined;
  }
}

const Vue  = loadModule('vue');

function main() {
  const version =  process.env.npm_config_vueVersion || (Vue ? Vue.version : '2.7.');
  if (!Vue || typeof version !== 'string') {
    console.warn('Vue is not found. Please run "npm install vue" to install.');
    return;
  }

  if (version.startsWith('2.')) {
    switchVersion(2);
  } else if (version.startsWith('3.')) {
    switchVersion(3);
  } else {
    console.warn(`Vue version v${version} is not supported.`);
  }
}

main();

