/**
 * 微信小程序适配器 —— 基于 requirePlugin('WechatSI')
 *
 * 使用前提：小程序 app.json 需配置：
 *   {
 *     "plugins": {
 *       "WechatSI": {
 *         "version": "0.3.5",
 *         "provider": "wx069ba97219f66d99"
 *       }
 *     }
 *   }
 *
 * 权限：需要在 app.json 或页面调用时申请 scope.record
 */
import { BaseSpeechAdapter } from './base';
import type { AdapterStartOptions } from '../type';

interface WechatSIManager {
  onStart: (cb: () => void) => void;
  onRecognize: (cb: (res: { result?: string; end?: boolean }) => void) => void;
  onStop: (cb: (res: { tempFilePath?: string; duration?: number; result?: string }) => void) => void;
  onError: (cb: (err: unknown) => void) => void;
  start(opts: { duration: number; lang: string }): void;
  stop(): void;
}

declare const requirePlugin: (name: string) => any;

export class WechatSIAdapter extends BaseSpeechAdapter {
  private _manager: WechatSIManager | null = null;

  private _managerRecording = false;

  private _ignoreNextStop = false;

  constructor() {
    super();
    this._initManager();
  }

  destroy(): void {
    try {
      if (this._manager && this._managerRecording) {
        this._manager.stop();
      }
    } catch (e) {
      // ignore
    }
    this._manager = null;
    this._managerRecording = false;
    this._ignoreNextStop = false;
    super.destroy();
  }

  async checkAuth(): Promise<boolean> {
    return new Promise((resolve) => {
      uni.getSetting({
        success: (res) => {
          const authSetting = (res as any).authSetting || {};
          resolve(!!authSetting['scope.record']);
        },
        fail: () => resolve(false),
      });
    });
  }

  async requestAuth(): Promise<boolean> {
    // 先检测系统层：微信是否被系统禁用了麦克风
    const sysOk = await this._checkSystemMicPermission();
    if (!sysOk) return false;

    try {
      await uni.authorize({ scope: 'scope.record' });
      return true;
    } catch (e) {
      // 用户拒绝 / 已拒绝不再询问 —— 引导去设置页
      return this._openSetting();
    }
  }

  async start(opts: AdapterStartOptions): Promise<void> {
    if (!this._manager) {
      this._initManager();
    }
    if (!this._manager) {
      this.emit('error', new Error('缺少语音识别插件 WechatSI'));
      return;
    }
    this._manager.start({ duration: opts.duration, lang: opts.lang });
  }

  async stop(): Promise<void> {
    if (!this._manager) return;
    if (this._managerRecording) {
      this._manager.stop();
    } else {
      // 录音尚未真正开始，忽略下一次 stop 回调
      this._ignoreNextStop = true;
    }
  }

  private _initManager(): void {
    try {
      if (typeof requirePlugin === 'function') {
        const plugin = requirePlugin('WechatSI');
        this._manager = plugin?.getRecordRecognitionManager?.() || null;
      }
    } catch (e) {
      this._manager = null;
    }

    if (!this._manager) return;

    this._manager.onStart = () => {
      this._managerRecording = true;
      this.emit('start');
    };

    this._manager.onRecognize = (res: any) => {
      if (res?.result && !res?.end) {
        this.emit('partial', { result: res.result });
      }
    };

    this._manager.onStop = (res: any) => {
      this._managerRecording = false;
      if (this._ignoreNextStop) {
        this._ignoreNextStop = false;
        return;
      }
      const tempFilePath = res?.tempFilePath || '';
      const duration = res?.duration || 0;
      const result = res?.result || '';
      this.emit('stop', { tempFilePath, duration, result });
    };

    this._manager.onError = (err) => {
      this._managerRecording = false;
      this.emit('error', err);
    };
  }

  private async _checkSystemMicPermission(): Promise<boolean> {
    // 低版本基础库可能没有该 API
    if (typeof (uni as any).getAppAuthorizeSetting !== 'function') return true;
    try {
      const res = (uni as any).getAppAuthorizeSetting();
      const mic = res?.microphoneAuthorized;
      if (mic === 'denied') {
        uni.showModal({
          title: '无法使用麦克风',
          content:
            '检测到手机系统已关闭"微信"的麦克风权限。\n\n请到系统设置中开启：\n- iOS：设置 > 微信 > 麦克风\n- Android：设置 > 应用管理 > 微信 > 权限 > 麦克风\n\n开启后返回小程序再试。',
          showCancel: false,
        });
        return false;
      }
      return true;
    } catch (e) {
      return true;
    }
  }

  private async _openSetting(): Promise<boolean> {
    return new Promise((resolve) => {
      uni.openSetting({
        success: (r) => {
          resolve(!!(r as any).authSetting?.['scope.record']);
        },
        fail: () => {
          uni.showToast({ icon: 'none', title: '打开设置失败' });
          resolve(false);
        },
      });
    });
  }
}

/** 工厂：创建微信小程序 adapter */
export function createWechatSIAdapter(): WechatSIAdapter {
  return new WechatSIAdapter();
}
