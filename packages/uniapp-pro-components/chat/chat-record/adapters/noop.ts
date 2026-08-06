/**
 * 占位适配器 —— 用于当前平台无内置实现的场景（App / 支付宝小程序 / 抖音小程序 等）
 *
 * 行为：checkAuth 恒 false，requestAuth 弹提示后返回 false，start 触发 error。
 * 业务方应替换为自实现（如 uni.getRecorderManager + 讯飞 / 腾讯云 ASR）。
 */
import { BaseSpeechAdapter } from './base';
import type { AdapterStartOptions } from '../type';

export class NoopSpeechAdapter extends BaseSpeechAdapter {
  async checkAuth(): Promise<boolean> {
    return false;
  }

  async requestAuth(): Promise<boolean> {
    uni.showToast({
      icon: 'none',
      title: '当前平台暂不支持语音识别，请传入自定义 adapter',
      duration: 2500,
    });
    return false;
  }

  async start(_opts: AdapterStartOptions): Promise<void> {
    this.emit('error', new Error('NoopSpeechAdapter: 当前平台未提供语音识别能力'));
  }

  async stop(): Promise<void> {
    // no-op
  }
}

/** 工厂：创建占位 adapter */
export function createNoopAdapter(): NoopSpeechAdapter {
  return new NoopSpeechAdapter();
}
