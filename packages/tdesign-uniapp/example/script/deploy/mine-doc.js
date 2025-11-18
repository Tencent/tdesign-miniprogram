const path = require('path');

const { execCommand } = require('t-comm');

require('./local.env')();

const args = process.argv.slice(2);
const isChat = args[2] == 1;

const DEPLOY_CONFIG = {
  publishBash: path.resolve(__dirname, './publish.sh'),
  distDir: isChat ? './packages/site-chat/dist/' : './packages/site/dist/',
  hostTargetDir: isChat ? '/usr/share/nginx/html/tdesign-uniapp-chat/' : '/usr/share/nginx/html/tdesign-uniapp/',
  hostName: args[0] || process.env.HOST_NAME,
  hostPwd: args[1] || process.env.HOST_PWD,
  HOST_PORT: 22,
  root: process.cwd(),
};

async function main() {
  console.log('[DEPLOY_CONFIG]', DEPLOY_CONFIG);


  if (!DEPLOY_CONFIG.hostPwd || !DEPLOY_CONFIG.hostName) {
    throw new Error('缺少环境变量');
  }

  execCommand(
    `sh ${DEPLOY_CONFIG.publishBash} ${DEPLOY_CONFIG.distDir} ${DEPLOY_CONFIG.hostTargetDir} ${DEPLOY_CONFIG.hostName} ${DEPLOY_CONFIG.hostPwd} ${DEPLOY_CONFIG.HOST_PORT}`,
    DEPLOY_CONFIG.root,
    'inherit',
  );
}

main();
