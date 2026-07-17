/**
 * chat-record adapters 统一出口
 *
 * 使用方式：
 *
 * ```ts
 * // 自动按平台选择
 * import { createDefaultAdapter } from '.../adapters';
 * const adapter = createDefaultAdapter();
 *
 * // 指定平台
 * import { createWechatSIAdapter } from '.../adapters';
 * const adapter = createWechatSIAdapter();
 *
 * // 自定义实现（接腾讯云 ASR —— 签名走后端，密钥不下客户端）
 * import { TencentASRAdapter } from '.../adapters';
 * const adapter = new TencentASRAdapter({ signEndpoint: 'https://xxx/api/asr/tencent-sign' });
 * ```
 */
import type { Adapter } from '../type';
import { createWechatSIAdapter } from './wechatsi';
import { createWebSpeechAdapter } from './webspeech';
import { createNoopAdapter } from './noop';

export * from './base';
export * from './wechatsi';
export * from './webspeech';
export * from './noop';
export * from './tencent-asr';

/**
 * 按当前运行平台创建默认适配器
 * - MP-WEIXIN: WechatSIAdapter
 * - H5:        WebSpeechAdapter
 * - APP / 其他小程序: NoopSpeechAdapter
 */
export function createDefaultAdapter(): Adapter {
  let res;
  // #ifdef MP-WEIXIN
  res = createWechatSIAdapter();
  // #endif

  // #ifdef H5
  res = createWebSpeechAdapter();
  // #endif

  // #ifdef APP-PLUS || APP-NVUE || APP-HARMONY
  res = createNoopAdapter();
  // #endif

  // #ifdef MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || MP-QQ || MP-KUAISHOU || MP-LARK || MP-JD
  res = createNoopAdapter();
  // #endif

  // 保底（编译期条件都没命中时不至于返回 undefined）
  if (!res) {
    res = createNoopAdapter();
  }
  return res;
}
