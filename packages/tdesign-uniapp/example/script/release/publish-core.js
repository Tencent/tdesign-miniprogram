const { execCommand, readFileSync } = require('t-comm');
const path = require('path');


function getTag(version) {
  if (version.includes('alpha')) {
    return 'alpha';
  }
  if (version.includes('beta')) {
    return 'beta';
  }
  return 'latest';
}

function publishCore(publishDir) {
  const { version } = readFileSync(path.resolve(publishDir, 'package.json'), true);
  console.log('[version] ', version);

  const tag = getTag(version);
  console.log('[tag] ', version);

  execCommand(`npm publish --tag ${tag}`, publishDir, { stdio: 'inherit' });
}

module.exports = {
  publishCore,
};
