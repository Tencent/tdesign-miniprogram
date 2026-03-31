import { SuperComponent, wxComponent } from '../../../components/common/src/index';
import config from '../../../components/common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-chat-record`;

// 交互阈值配置（单位：px，与 uniapp 逻辑保持一致）
const MOVE_THRESHOLD_Y = 60;
const MOVE_THRESHOLD_X = 30;

// 语音录制定时器-模拟长按
let startRecordTimer: number | null = null;
let recordTimer: number | null = null;

type VoiceInfo = {
  voicePath: string;
  voiceText: string;
  duration: number; // 秒
};

@wxComponent()
export default class ChatRecord extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    classPrefix: name,

    // 权限
    recordAuthSetting: false,
    // 是否已授权 scope.record（未授权时应展示去设置/授权引导）
    recordAuthStatus: false,

    // UI 状态
    showMask: false,
    activeBtnCancel: false,
    activeBtnSend: false,

    // 流程状态
    processStatus: 'idle' as 'idle' | 'recording' | 'processing' | 'confirm' | 'error',
    interactStatus: 'normal' as 'normal' | 'release_cancel' | 'release_convert',

    // 录音数据
    voiceInfo: {
      voicePath: '',
      voiceText: '',
      duration: 0,
    } as VoiceInfo,

    // 转文字结果
    translateResult: '',
    startTouch: { x: 0, y: 0 },
    isStarted: false,
    isManagerBusy: false,
    ignoreNextOnStop: false,
    managerRecording: false,
    waveList: Array.from({ length: 13 }).map((_, i) => i + 1),
    bubbleStatusClass: 'bubble-blue',
  };

  private manager: any = null;

  methods = {
    initRecordManager() {
      try {
        // WechatSI 插件需要你在 app.json 里配置 plugins: { WechatSI: { ... } }
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const plugin = requirePlugin('WechatSI');
        this.manager = plugin?.getRecordRecognitionManager?.();
      } catch (e) {
        this.manager = null;
      }

      const {manager} = this;
      if (!manager) return;

      manager.onStart = () => {
        this.setData({
          managerRecording: true,
          processStatus: 'recording',
        });
        this.updateBubbleClass();
      };

      manager.onRecognize = (res: any) => {
        // res.result 实时识别结果；res.end 表示结束
        if (res?.result && !res?.end) {
          const voiceText = res.result;
          this.setData({
            voiceInfo: {
              ...this.data.voiceInfo,
              voiceText,
            },
          });
          if (this.data.interactStatus === 'release_convert') {
            this.setData({ translateResult: voiceText });
          }
        }
      };

      manager.onStop = (res: any) => {
        this.setData({
          managerRecording: false,
          isManagerBusy: false,
        });

        if (this.data.ignoreNextOnStop) {
          this.setData({ ignoreNextOnStop: false });
          return;
        }

        if (this.data.processStatus === 'error') return;

        const tempFilePath = res?.tempFilePath || '';
        const durationMs = res?.duration || 0;
        const duration = Math.floor(durationMs / 1000) || 1;
        const voiceText = res?.result || '';

        this.setData({
          voiceInfo: {
            voicePath: tempFilePath,
            voiceText,
            duration,
          },
          translateResult: voiceText,
          processStatus: 'confirm',
          activeBtnCancel: true,
        });
        this.updateBubbleClass();
      };

      manager.onError = (err: any) => {
          wx.showToast({
          icon: 'none',
          title: '录音识别失败，请重试',
          duration: 2000,
        });
        this.setData({
          isManagerBusy: false,
          managerRecording: false,
          processStatus: 'error',
          interactStatus: 'normal',
          translateResult: '',
          activeBtnCancel: false,
          activeBtnSend: false,
          showMask: false,
        });
        this.updateBubbleClass();

        this.triggerEvent('error', err);
      };
    },

    updateBubbleClass() {
      const { interactStatus, processStatus } = this.data;
      let bubbleStatusClass = 'bubble-blue';
      if (interactStatus === 'release_cancel' || processStatus === 'error') bubbleStatusClass = 'bubble-red';
      else if (interactStatus === 'release_convert' || processStatus === 'processing' || processStatus === 'confirm') {
        bubbleStatusClass = 'bubble-wide';
      }
      this.setData({ bubbleStatusClass });
    },

    // 监听键盘高度变化
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onKeyboardHeightChange(e: any) {
      if (this.properties.autoHeight) {
        this.setData({
          bottomHeight: e.height || 0,
        });
      }
    },

    // 文本框获取焦点时触发
    focusTextarea(e) {
      console.error('focusTextarea===========', e)
      // 如果开启了自动高度，键盘弹出时会通过 onKeyboardHeightChange 更新 bottomHeight
      if (this.properties.autoHeight) {
        this.setData({
          bottomHeight: e.detail.height,
        });
      }
    },

    // 文本框失去焦点时触发
    blurTextarea() {
      if (this.properties.autoHeight) {
        this.setData({
          bottomHeight: 0,
        });
      }
    },
    async getVoiceAuthSetting() {
      return new Promise<boolean>((resolve, reject) => {
        wx.getSetting({
          success: (res) => {
            const authSetting = res.authSetting || {};
            const hasRequested = Object.prototype.hasOwnProperty.call(authSetting, 'scope.record');
            const recordAuthStatus = !!authSetting['scope.record'];
            const recordAuthSetting = recordAuthStatus;
            const recordAuthDenied = hasRequested && !recordAuthStatus;

            this.setData({ recordAuthSetting, recordAuthStatus, recordAuthDenied } as any);
            resolve(recordAuthSetting);
          },
          fail: () => reject(new Error('获取录音权限设置失败')),
        });
      });
    },

    async requestRecordAuth() {
      // 系统层检测：如果系统把“微信-麦克风”关了，这里会提示去系统设置
      const sysOk = await this.checkSystemMicPermission();
      if (!sysOk) return;

      try {
        // 先尝试直接弹授权框（必须在用户点击事件里调用）
        await wx.authorize({ scope: 'scope.record' });

        // 授权成功后刷新状态
        await this.getVoiceAuthSetting();
      } catch (e) {
        // 用户拒绝 / 或已拒绝不再询问 -> 才引导去设置页
        this.openVoiceSetting();
      }
    },

    /**
     * 申请小程序录音权限（scope.record）
     * 同时检测"系统层面是否禁用了微信麦克风"。
     */
    async applyAuth() {
      // 先检测系统层面的麦克风权限（如果系统禁用，openSetting 里通常也不会出现开关）
      const sysOk = await this.checkSystemMicPermission();
      if (!sysOk) {
        this.setData({ recordAuthSetting: false, recordAuthStatus: false });
        return false;
      }

      return new Promise<boolean>((resolve, reject) => {
        wx.authorize({
          scope: 'scope.record',
          success: () => {
            this.setData({ recordAuthSetting: true, recordAuthStatus: true });
            resolve(true);
          },
          fail: (err: any) => {
            // 这里通常是用户拒绝（或已拒绝且不再询问）
            this.setData({ recordAuthSetting: false, recordAuthStatus: false });
            reject(err);
          },
        });
      });
    },

    /**
     * 检测系统层面的麦克风权限是否允许"微信"使用。
     * - iOS/Android 在系统设置里关闭微信麦克风时：
     *   openSetting 页面可能没有"录音"开关，因此必须给出明确引导。
     */
    async checkSystemMicPermission() {
      // 低版本基础库可能没有该 API，缺失时默认继续走授权流程
      // @ts-ignore
      if (typeof wx.getAppAuthorizeSetting !== 'function') return true;

      try {
        // @ts-ignore
        const res = wx.getAppAuthorizeSetting();
        const mic = res?.microphoneAuthorized; // 'authorized' | 'denied' | 'not determined'

        if (mic === 'denied') {
          this.showSystemMicGuide();
          return false;
        }
        return true;
      } catch (e) {
        return true;
      }
    },

    /** 系统麦克风被关闭时的明确引导 */
    showSystemMicGuide() {
      wx.showModal({
        title: '无法使用麦克风',
        content:
          '检测到手机系统已关闭"微信"的麦克风权限。\n\n请到系统设置中开启：\n- iOS：设置 > 微信 > 麦克风\n- Android：设置 > 应用管理 > 微信 > 权限 > 麦克风\n\n开启后返回小程序再试。',
        showCancel: false,
      });
    },

    async openVoiceSetting() {
      // 先判断是否系统层禁用了微信麦克风；如果是，直接提示去系统设置
      const sysOk = await this.checkSystemMicPermission();
      if (!sysOk) return;

      wx.openSetting({
        success: (r) => {
          const recordAuthSetting = !!r.authSetting?.['scope.record'];
          const recordAuthStatus = !!r.authSetting?.['scope.record'];
          this.setData({ recordAuthSetting, recordAuthStatus });
        },
        fail: () => {
          wx.showToast({ icon: 'none', title: '打开设置失败' });
        },
      });
    },

    // ==================== 授权设置回调 ====================
    onOpenSetting(e: WechatMiniprogram.OpenSettingSuccessCallbackResult) {
      const { authSetting } = e;
      if (authSetting?.['scope.record']) {
        // 用户授权了录音权限
        this.setData({
          recordAuthSetting: true,
          recordAuthStatus: true,
        });
      } else {
        // 用户未授权录音权限
        this.setData({
          recordAuthSetting: false,
          recordAuthStatus: false,
        });
      }
    },

    // ==================== 录音流程 ====================
    async startRecord(e: WechatMiniprogram.TouchEvent) {
      // 避免识别回调/stop 尚未完成又开始
      if (this.data.isManagerBusy) {
        wx.showToast({ icon: 'none', title: '识别中，请稍候…' });
        return;
      }

      if (this.data.processStatus === 'error') {
        this.resetState();
      }

      this.setData({ isStarted: true });

      // 授权检查
      try {
        await this.getVoiceAuthSetting();
        if (!this.data.recordAuthSetting) {
          const ok = await this.applyAuth();
          if (!ok) {
            this.setData({ isStarted: false });
            return;
          }
          this.setData({ isStarted: false });
          return;
        }
      } catch (error) {
        this.setData({ isStarted: false });
        return;
      }

      // 记录起始触摸点
      const touch = e?.changedTouches?.[0];
      if (touch) {
        this.setData({ startTouch: { x: touch.clientX, y: touch.clientY } });
      }

      this.setData({
        showMask: true,
        processStatus: 'recording',
        interactStatus: 'normal',
        translateResult: '',
        voiceInfo: { voicePath: '', voiceText: '', duration: 0 },
      });
      this.updateBubbleClass();

      // 100ms 后开始录音（与原组件一致）
      if (startRecordTimer) {
        clearTimeout(startRecordTimer);
        startRecordTimer = null;
      }
      startRecordTimer = setTimeout(() => {
        if (!this.data.isStarted) return;

        if (!this.manager) {
          this.initRecordManager();
        }

        if (this.manager) {
          this.setData({ isManagerBusy: true });
          // 从 properties 取 lang/duration
          // @ts-ignore
          const duration = this.properties?.duration ?? 60000;
          // @ts-ignore
          const lang = this.properties?.lang ?? 'zh_CN';
          this.manager.start({ duration, lang });
        } else {
          // 插件不可用
          wx.showToast({ icon: 'none', title: '缺少语音识别插件 WechatSI' });
          this.setData({ processStatus: 'error' });
          this.updateBubbleClass();
        }
      }, 100) as unknown as number;

      // 预留：如需显示计时/动画，可使用 recordTimer
      if (recordTimer) {
        clearInterval(recordTimer);
        recordTimer = null;
      }
      recordTimer = setInterval(() => {
        // noop
      }, 1000) as unknown as number;
    },

    touchmove(e: WechatMiniprogram.TouchEvent) {
      if (!this.data.isStarted || !this.data.showMask) return;
      if (this.data.processStatus !== 'recording') return;

      const touch = (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]);
      if (!touch) return;

      const deltaX = touch.clientX - this.data.startTouch.x;
      const deltaY = touch.clientY - this.data.startTouch.y;

      let interactStatus: typeof this.data.interactStatus = 'normal';
      if (deltaY < -MOVE_THRESHOLD_Y) {
        if (deltaX < -MOVE_THRESHOLD_X) interactStatus = 'release_cancel';
        else if (deltaX > MOVE_THRESHOLD_X) interactStatus = 'release_convert';
      }

      if (interactStatus !== this.data.interactStatus) {
        this.setData({ interactStatus });
        this.updateBubbleClass();
      }
    },

    stopRecord() {
      if (this.data.processStatus !== 'recording') return;

      this.setData({ isStarted: false });

      if (recordTimer) {
        clearInterval(recordTimer);
        recordTimer = null;
      }
      if (startRecordTimer) {
        clearTimeout(startRecordTimer);
        startRecordTimer = null;
      }

      // 停止录音
      if (this.manager) {
        if (this.data.managerRecording) {
          this.manager.stop();
        } else {
          // 录音尚未开始，取消启动
          this.setData({ ignoreNextOnStop: true });
        }
      }

      if (this.data.interactStatus === 'release_cancel') {
        // 取消时不让 onStop 把 UI 推到 confirm
        this.setData({
          ignoreNextOnStop: true,
          activeBtnCancel: true,
         });
        this.cancelRecord();
      } else if (this.data.interactStatus === 'release_convert') {
        // 转文字：直接进入 confirm（最终文本以 onStop 为准）
        this.convertToText();
      } else {
        // 正常松手：等待 onStop
      }
    },

    touchcancel() {
      this.cancelRecord();
    },

    // ==================== 业务逻辑 ====================
    cancelRecord() {
      this.setData({ showMask: false });
      this.resetState();
    },

    convertToText() {
      this.setData({
        processStatus: 'confirm',
        interactStatus: 'normal',
        translateResult: this.data.voiceInfo.voiceText,
      });
      this.updateBubbleClass();
    },

    sendVoice() {
      // 发送语音原始信息（按原组件逻辑保留）
      this.triggerEvent('recognize', {
        voicePath: this.data.voiceInfo.voicePath,
        voiceText: this.data.voiceInfo.voiceText,
        duration: this.data.voiceInfo.duration,
      });
      // 延迟重置状态，确保事件能够正确触发
      setTimeout(() => {
        this.resetState();
      }, 100);
    },

    handleSendVoiceMsg() {
      if (this.data.processStatus === 'error') {
        return;
      }

      // 发送语音消息，包含语音文件和转文字结果
      this.triggerEvent('recognize', {
        voicePath: this.data.voiceInfo.voicePath,
        voiceText: this.data.translateResult || this.data.voiceInfo.voiceText,
        duration: this.data.voiceInfo.duration,
      });

      // 关闭弹窗
      this.setData({ showMask: false });
      // 延迟重置状态，确保事件能够正确触发
      setTimeout(() => {
        this.resetState();
      }, 100);
    },

    handleCancelSend() {
      if (this.data.processStatus === 'error') {
        this.resetState();
        return;
      }
      // 关闭弹窗
      this.setData({ showMask: false });
      // 延迟重置状态，确保事件能够正确触发
      setTimeout(() => {
        this.resetState();
      }, 100);
    },

    onTranslateInput(e: WechatMiniprogram.Input) {
      this.setData({
        translateResult: (e.detail?.value ?? '') as string,
        activeBtnCancel: !!e.detail?.value,
        activeBtnSend: !!e.detail?.value,
       });
    },

    // ==================== 状态管理 ====================
    resetState() {
      if (recordTimer) {
        clearInterval(recordTimer);
        recordTimer = null;
      }
      if (startRecordTimer) {
        clearTimeout(startRecordTimer);
        startRecordTimer = null;
      }

      if (this.manager && this.data.managerRecording) {
        try {
          this.manager.stop();
        } catch (e) {
          // ignore
        }
      }

      this.setData({
        isStarted: false,
        managerRecording: false,
        showMask: false,
        processStatus: 'idle',
        interactStatus: 'normal',
        translateResult: '',
        voiceInfo: { voicePath: '', voiceText: '', duration: 0 },
        activeBtnCancel: false,
        activeBtnSend: false,
        isManagerBusy: false,
        ignoreNextOnStop: false,
      });
      this.updateBubbleClass();
    },
  };

  lifetimes = {
    created() {
      // 确保 bottomHeight 有初始值
      if (typeof this.properties.bottomHeight === 'undefined') {
        this.setData({ bottomHeight: 0 });
      }

      // 绑定方法到 this.data（对齐 chat-sender.ts 的写法）
      this.data.initRecordManager = this.initRecordManager.bind(this);
      this.data.updateBubbleClass = this.updateBubbleClass.bind(this);
      this.data.getVoiceAuthSetting = this.getVoiceAuthSetting.bind(this);
      this.data.applyAuth = this.applyAuth.bind(this);
      this.data.openVoiceSetting = this.openVoiceSetting.bind(this);
      this.data.startRecord = this.startRecord.bind(this);
      this.data.touchmove = this.touchmove.bind(this);
      this.data.stopRecord = this.stopRecord.bind(this);
      this.data.touchcancel = this.touchcancel.bind(this);
      this.data.cancelRecord = this.cancelRecord.bind(this);
      this.data.convertToText = this.convertToText.bind(this);
      this.data.sendVoice = this.sendVoice.bind(this);
      this.data.handleSendVoiceMsg = this.handleSendVoiceMsg.bind(this);
      this.data.handleCancelSend = this.handleCancelSend.bind(this);
      this.data.onTranslateInput = this.onTranslateInput.bind(this);
      this.data.onOpenSetting = this.onOpenSetting.bind(this);
      this.data.resetState = this.resetState.bind(this);
      this.data.requestRecordAuth = this.requestRecordAuth.bind(this);
      this.data.onKeyboardHeightChange = this.onKeyboardHeightChange.bind(this);
      this.data.focusTextarea = this.focusTextarea.bind(this);
      this.data.blurTextarea = this.blurTextarea.bind(this);

      this.initRecordManager();

      // 监听键盘高度变化
      wx.onKeyboardHeightChange(this.data.onKeyboardHeightChange);
    },

    attached() {
      // 进入页面时检查一次权限
      this.getVoiceAuthSetting().catch(() => null);
    },

    detached() {
      if (this.manager) {
        try {
          this.manager.stop();
        } catch (e) {
          // ignore
        }
      }
      // 移除键盘高度监听
      wx.offKeyboardHeightChange(this.data.onKeyboardHeightChange);
      this.resetState();
    },
  };
}
