import fs from 'fs/promises';
import { existsSync } from 'fs';
import resolveCwd from '../utils.mjs';
import { getAccessToken, getUnlimitedQRCode } from './api.mjs';

// 去读 app.json 中 pages && subpackages 字段
const APP_JSON = JSON.parse(await fs.readFile(resolveCwd('../example/app.json'), 'utf-8'));

const { pages, subpackages } = APP_JSON;

const APP_ID = process.argv[process.argv.indexOf('--APP_ID') + 1]; // 在 --APP_ID 后面
const APP_SECRET = process.argv[process.argv.indexOf('--APP_SECRET') + 1]; // --APP_SECRET 后面

if (process.argv.indexOf('--APP_ID') < 0 || process.argv.indexOf('--APP_SECRET') < 0) {
  console.error('请传入 APP_ID 与 APP_SECRET 或联系PMC操作');
  process.exit(1);
}

const isExistStr = (str, arr) => {
  const temp = [...new Set(str.split('/').slice(1))].join('-');
  return arr.includes(temp);
};

const isSkylinePage = (str) => {
  return str.includes('skyline');
};

const getImageList = async () => {
  const imageFolderDir = resolveCwd('../site/public/assets/qrcode');
  if (!existsSync(imageFolderDir)) return [];
  const images = await fs.readdir(imageFolderDir);
  return images.map((item) => item.split('.')[0]);
};

const getNewPageList = async (list) => {
  const pageList = [];
  const imageOldList = await getImageList();

  list.forEach((item) => {
    if (Object.prototype.toString.call(item) === '[object Object]') {
      const pageName = item.root.split('/')[1];
      const pagePath = `${item.root}${pageName}`;
      if (!isExistStr(pagePath, imageOldList) && !isSkylinePage(pagePath)) {
        pageList.push(pagePath);
      }
    } else if (!isExistStr(item, imageOldList) && !isSkylinePage(item)) {
      pageList.push(item);
    }
  });

  return pageList;
};

const getUnlimitedQRCodeImage = async (appid, appSecret) => {
  try {
    const tokenRes = await getAccessToken(appid, appSecret);
    const result = typeof tokenRes === 'string' ? JSON.parse(tokenRes) : tokenRes;

    if (!result.access_token) {
      console.error('获取 access_token 失败');
      return;
    }

    const token = result.access_token;
    console.log('access_token 2h内有效：', token);

    const baseParameter = {
      width: 280,
    };
    const baseConfig = {
      responseType: 'arraybuffer',
    };

    const pageList = await getNewPageList(pages.concat(subpackages));
    console.log(`待生成小程序码的页面数量：${pageList.length}`);

    // 并发获取所有小程序码
    const results = await Promise.allSettled(
      pageList.map(async (item) => {
        const temp = [...new Set(item.split('/').slice(1))];
        const fileName = temp.join('-');

        const specialParameter = {
          page: item,
          scene: `name=${temp[0]}`,
          check_path: false,
        };

        try {
          const res = await getUnlimitedQRCode(token, JSON.stringify({ ...specialParameter, ...baseParameter }), {
            ...baseConfig,
          });

          // 微信接口成功时返回 Buffer，失败时返回 JSON 结构
          if (res.length < 200) {
            const { errcode, errmsg } = JSON.parse(res.toString());
            console.error('===小程序码获取失败===', item, { errcode, errmsg });
            process.exit(1);
          }

          const buffer = Buffer.isBuffer(res) ? res : Buffer.from(res, 'base64');
          const destPath = resolveCwd(`../site/public/assets/qrcode/${fileName}.png`);
          await fs.writeFile(destPath, buffer);
          console.log(`✓ 小程序码已生成：${fileName}.png`);
        } catch (e) {
          console.error(`✗ 生成小程序码失败：${item}`, e);
          throw e;
        }
      }),
    );

    const failed = results.filter((r) => r.status === 'rejected');
    if (failed.length > 0) {
      console.error(`\n有 ${failed.length} 个页面生成失败`);
    } else {
      console.log('\n=== 所有小程序码生成完成 ===');
    }
  } catch (error) {
    console.error('getAccessToken 错误：', error);
  }
};

/**
 * @description 命令行生成小程序码 npm run qrcode -- --APP_ID xxx --APP_SECRET xxx
 */
getUnlimitedQRCodeImage(APP_ID, APP_SECRET);
