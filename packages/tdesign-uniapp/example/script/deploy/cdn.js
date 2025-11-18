const { uploadCOSFileAndPurgeUrlCache } = require('t-comm');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

require('./local.env')();
const args = process.argv.slice(2);


const COS_CONFIG = {
  bucket: 'mike-1255355338',
  region: 'ap-guangzhou',
  secretId: args[0] || process.env.COS_SECRET_ID,
  secretKey: args[1] || process.env.COS_SECRET_KEY,
  isChat: args[2] == 1,
};

const CONFIG = {
  UNIAPP_SITE_GLOB: './packages/site/dist/**/*',
  UNIAPP_CHAT_SITE_GLOB: './packages/site-chat/dist/**/*',

  UNIAPP_PREFIX: 'tdesign-uniapp',
  UNIAPP_CHAT_PREFIX: 'tdesign-uniapp-chat',

  UNIAPP_SITE_PACKAGE_NAME: 'site',
  UNIAPP_CHAT_SITE_PACKAGE_NAME: 'site-chat',
};


async function uploadCdn() {
  const list = glob.sync(COS_CONFIG.isChat ? CONFIG.UNIAPP_SITE_GLOB
    : CONFIG.UNIAPP_CHAT_SITE_GLOB, {
    ignore: '**/*.html',
    nodir: true,
  });

  const files = list.map((item) => {
    const filePath = path.resolve(process.cwd(), item);
    const key =  `${COS_CONFIG.isChat
      ? CONFIG.UNIAPP_PREFIX
      : CONFIG.UNIAPP_CHAT_PREFIX}/${path.relative(path.resolve(
      process.cwd(),
      `./packages/${COS_CONFIG.isChat
        ? CONFIG.UNIAPP_SITE_PACKAGE_NAME
        : CONFIG.UNIAPP_CHAT_SITE_PACKAGE_NAME}/dist`,
    ), item)}`;

    return {
      key,
      path: filePath,
    };
  });

  for (const item of files) {
    uploadCOSFileAndPurgeUrlCache({
      ...COS_CONFIG,

      files: [item],

      area: 'mainland',
      useEO: false,
    }).then((res) => {
      console.log('[uploadResult] res: ', res);

      fs.unlinkSync(item.path);
    })
      .catch((e) => {
        console.log('uploadCOSFileAndPurgeUrlCache.err: ', e);
      });
  }
}

uploadCdn();
