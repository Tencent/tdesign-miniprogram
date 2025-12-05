const { publishCore } = require('./publish-core');
const path = require('path');

const PUBLISH_DIR = path.resolve(__dirname, '../../../../npm_dist');

console.log('[PUBLISH_DIR]', PUBLISH_DIR);

function main() {
  publishCore(PUBLISH_DIR);
}

main();
