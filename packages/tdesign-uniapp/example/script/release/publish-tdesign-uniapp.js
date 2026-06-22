const path = require('path');

const { publishCore } = require('./publish-core');

const PUBLISH_DIR = path.resolve(__dirname, '../../../../tdesign-uniapp-chat/npm_dist');

console.log('[PUBLISH_DIR]', PUBLISH_DIR);

function main() {
  publishCore(PUBLISH_DIR);
}

main();
