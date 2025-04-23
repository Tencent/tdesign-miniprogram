import { getAppBaseInfo } from './wechat';

// 获取系统信息
let systemInfo: WechatMiniprogram.AppBaseInfo | WechatMiniprogram.SystemInfo;
function getSystemInfo() {
  if (systemInfo == null) {
    systemInfo = getAppBaseInfo();
  }
  return systemInfo;
}

// 版本号比较, 参考：https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html
export function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  const len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }

  for (let i = 0; i < len; i += 1) {
    const num1 = parseInt(v1[i], 10);
    const num2 = parseInt(v2[i], 10);

    if (num1 > num2) {
      return 1;
    }
    if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}

function judgeByVersion(version: string) {
  const currentSDKVersion = getSystemInfo().SDKVersion;
  return compareVersion(currentSDKVersion, version) >= 0;
}

export function canIUseFormFieldButton() {
  return judgeByVersion('2.10.3');
}

export function canUseVirtualHost() {
  return judgeByVersion('2.19.2');
}

export function canUseProxyScrollView() {
  return judgeByVersion('2.19.2');
}
