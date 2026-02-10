import { SuperComponent, wxComponent } from '../../../components/common/src/index';
import config from '../../../components/common/config';
import props from './props';

declare const wx: any;
declare function requirePlugin(name: string): any;

type TouchEvent = {
  changedTouches?: Array<{ clientY: number }>;
  preventDefault?: () => void;
};

type RecorderManager = {
  start: (opt: { duration?: number; lang?: string }) => void;
  stop: () => void;
  onStop?: (res: { tempFilePath: string; duration: number; result?: string }) => void;
  onStart?: (res?: any) => void;
  onRecognize?: (res: { result?: string; end?: boolean }) => void;
  onError?: (res: { msg?: string }) => void;
};

type VoiceInfo = {
  voicePath: string;
  duration: number;
};

type Status = 'normal' | 'cancel' | 'recording' | 'thinking' | 'unknow' | 'complete' | 'error';

type DataShape = {
  classPrefix: string;
  showMask: boolean;
  touchStatus: '' | 'bottom' | 'top';
  startTime: number;
  recordCountDown: number;
  translateResult: string;
  voiceInfo: VoiceInfo;
  recordStatus: '' | 'recording' | 'thinking' | 'stop' | 'error';
  recordAuthSetting: boolean;
  recordAuthStatus: boolean;
  isStarted: boolean;
  bottomHeight: number;
  autoSendHeight: boolean;
  windowHeight: number;
  status: Status;
  translateSuccess: boolean;
  showRecordCountDown: boolean;
  hasSlotSpeechInput: boolean;
  hasSlotSpeechNoAuth: boolean;
};

const { prefix } = config;
const name = `${prefix}-chat-record`;

const plugin: any = requirePlugin('WechatSI');
const manager: RecorderManager | null =
  plugin && typeof plugin.getRecordRecognitionManager === 'function'
    ? (plugin.getRecordRecognitionManager() as RecorderManager)
    : null;

@wxComponent()
export default class ChatRecord extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  properties = props;

  data: DataShape = {
    classPrefix: name,
    showMask: false,
    touchStatus: 'bottom',
    startTime: 0,
    recordCountDown: -1,
    translateResult: '',
    voiceInfo: { voicePath: '', duration: 0 },
    recordStatus: '',
    recordAuthSetting: false,
    recordAuthStatus: true,
    isStarted: false,
    bottomHeight: 0,
    autoSendHeight: true,
    windowHeight: 0,
    status: 'normal',
    translateSuccess: false,
    showRecordCountDown: false,
    hasSlotSpeechInput: false,
    hasSlotSpeechNoAuth: false,
  };

  lifetimes = {
    attached: () => {
      this.initRecorderManager();
      this.getWindowHeight();
      this.updateSlots();
    },
    detached: () => {
      this.clearTimers();
      if (manager) manager.stop();
    },
  };

  observers = {
    recordCountDown: (val: number) => {
      this.updateDerived();
    },
    translateResult: (val: string) => {
      this.updateDerived();
    },
    recordStatus: (val: DataShape['recordStatus']) => {
      this.updateDerived();
    },
    touchStatus: (val: DataShape['touchStatus']) => {
      this.updateDerived();
    },
  } as any;

  /** 计算派生状态 */
  private computeStatus(): Status {
    const { touchStatus, recordStatus, translateSuccess } = this.data;
    if (touchStatus === 'top') return 'cancel';
    if (recordStatus === 'recording') return 'recording';
    if (recordStatus === 'thinking') return 'thinking';
    if (recordStatus === 'stop' && !translateSuccess) return 'unknow';
    if (recordStatus === 'stop' && translateSuccess) return 'complete';
    if (recordStatus === 'error') return 'error';
    return 'normal';
  }

  private updateDerived() {
    const translateSuccess = this.data.translateResult !== '-1' && !!this.data.translateResult;
    const showRecordCountDown = this.data.recordCountDown >= 0;
    this.setData({
      translateSuccess,
      showRecordCountDown,
      status: this.computeStatus(),
    });
  }

  private initRecorderManager() {
    if (!manager) return;
    manager.onStop = (res) => {
      const { tempFilePath, duration } = res;
      if (this.data.touchStatus === 'top') {
        this.resetRecordState();
        return;
      }
      this.setData({
        'voiceInfo.voicePath': tempFilePath,
        'voiceInfo.duration': Math.floor(duration / 1000) || 1,
        recordStatus: 'stop',
        touchStatus: '',
      });
      this.updateDerived();
    };
    manager.onStart = () => {
      this.setData({ recordStatus: 'thinking' });
      this.updateDerived();
    };
    manager.onRecognize = (res) => {
      if (res.result && !res.end) {
        this.setData({ recordStatus: 'recording', translateResult: res.result });
        this.updateDerived();
      }
    };
    manager.onError = (res) => {
      this.setData({ recordStatus: 'error', touchStatus: '', translateResult: '-1' });
      wx.showToast({ icon: 'none', title: res.msg || '录音识别失败，请重试', duration: 2000 });
      this.updateDerived();
    };
  }

  private clearTimers() {
    const self = this as any;
    if (self._recordTimer) { clearInterval(self._recordTimer); self._recordTimer = null; }
    if (self._startRecordTimer) { clearTimeout(self._startRecordTimer); self._startRecordTimer = null; }
  }

  private resetRecordState() {
    this.clearTimers();
    if (manager) manager.stop();
    this.setData({
      showMask: false,
      translateResult: '',
      recordStatus: '',
      touchStatus: '',
      recordCountDown: -1,
      startTime: 0,
    });
    this.updateDerived();
  }

  private getWindowHeight() {
    wx.getSystemInfo({
      success: (res: any) => {
        this.setData({ windowHeight: res.windowHeight });
      },
    });
  }

  private updateSlots() {
    // 需要时可检测 slot 是否存在；此处仅保留字段
    this.setData({ hasSlotSpeechInput: false, hasSlotSpeechNoAuth: false });
  }

  /** 业务方法 */
  onTranslateResultChange(value: string) {
    this.setData({ translateResult: value });
    this.updateDerived();
  }

  handleSendVoiceMsg() {
    if (this.data.translateResult && this.data.translateResult !== '-1') {
      this.triggerEvent('recognize', this.data.translateResult);
    }
    this.resetRecordState();
  }

  handleCancelSend() {
    this.resetRecordState();
  }

  async startRecord(e?: TouchEvent) {
    if (this.data.isStarted) return;
    this.setData({ isStarted: true });
    try {
      const authed = await this.getVoiceAuthSetting();
      if (!authed) {
        await this.applyAuth();
        this.setData({ isStarted: false });
        return;
      }
    } catch (err) {
      this.setData({ isStarted: false });
      return;
    }
    if (e && e.preventDefault) e.preventDefault();
    this.setData({ touchStatus: 'bottom', startTime: Date.now() });
    (this as any)._startRecordTimer = setTimeout(() => {
      if (!this.data.isStarted) return;
      this.setData({ showMask: true });
      if (!manager) this.initRecorderManager();
      if (manager) manager.start({ duration: 30000, lang: 'zh_CN' });
      (this as any)._recordTimer = setInterval(() => {
        const recordTime = Date.now() - this.data.startTime;
        if (recordTime > 50000) {
          const next = this.data.recordCountDown === -1 ? 10 : (this.data.recordCountDown - 1);
          this.setData({ recordCountDown: next });
        }
        if (recordTime > 60000) {
          this.stopRecord();
        }
        this.updateDerived();
      }, 1000);
    }, 500);
  }

  stopRecord() {
    this.setData({ isStarted: false });
    this.clearTimers();
    this.setData({ recordCountDown: -1 });
    if (!this.data.recordAuthStatus) {
      this.setData({ showMask: false, startTime: 0 });
      return;
    }
    if (this.data.startTime === 0) return;
    const recordTime = Date.now() - this.data.startTime;
    if (this.data.touchStatus === 'top') {
      if (manager) manager.stop();
      this.resetRecordState();
      this.setData({ startTime: 0 });
      wx.showToast({ icon: 'none', title: '已取消发送', duration: 1500 });
      return;
    }
    if (recordTime > 500) {
      this.setData({ 'voiceInfo.duration': Math.floor(recordTime / 1000) || 1, startTime: 0 });
      if (manager) manager.stop();
    } else {
      this.setData({ showMask: false, startTime: 0 });
      if (manager) manager.stop();
      wx.showToast({ icon: 'none', title: '说话时间太短' });
    }
    this.updateDerived();
  }

  touchmove(e: TouchEvent) {
    if (!this.data.isStarted || !this.data.showMask) return;
    const bottomHeight = 150;
    const touches = e.changedTouches || [];
    if (!touches[0]) return;
    const {clientY} = touches[0];
    const oldStatus = this.data.touchStatus;
    if (clientY > this.data.windowHeight - bottomHeight) {
      this.setData({ touchStatus: 'bottom' });
    } else {
      this.setData({ touchStatus: 'top' });
    }
    if (oldStatus !== this.data.touchStatus) {
      // 可选：打印日志
    }
    this.updateDerived();
  }

  touchcancel() {
    if (manager) manager.stop();
    this.clearTimers();
    this.resetRecordState();
    this.setData({ isStarted: false });
  }

  focusTextarea(e: { detail?: { height?: number } }) {
    if (this.data.autoSendHeight) {
      this.setData({ bottomHeight: (e.detail && e.detail.height) || 0 });
    }
  }

  blurTextarea() {
    this.setData({ bottomHeight: 0 });
  }

  /** 权限相关 */
  private getVoiceAuthSetting(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: (res: any) => {
          const authSettings = Object.keys(res.authSetting || {});
          const recordAuthSetting = authSettings.includes('scope.record');
          const recordAuthStatus = !!res.authSetting['scope.record'];
          this.setData({ recordAuthSetting, recordAuthStatus });
          resolve(recordAuthSetting);
        },
        fail: () => reject(false),
      });
    });
  }

  private applyAuth(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      wx.authorize({
        scope: 'scope.record',
        success: () => { this.setData({ recordAuthSetting: true, recordAuthStatus: true }); resolve(true); },
        fail: () => { this.setData({ recordAuthSetting: false, recordAuthStatus: false }); reject(false); },
      });
    });
  }
}
