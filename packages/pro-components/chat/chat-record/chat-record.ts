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
    recordAuthStatus: true,

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

    // 手势追踪
    startTouch: { x: 0, y: 0 },

    // 运行标记
    isStarted: false,
    isManagerBusy: false,
    ignoreNextOnStop: false,
    managerRecording: false,

    // UI 渲染辅助
    waveList: Array.from({ length: 13 }).map((_, i) => i + 1),
    bubbleStatusClass: 'bubble-blue',
  };

  // WechatSI 插件识别管理器
  private manager: any = null;

  methods = {
    // ==================== 初始化 ====================
    initRecordManager() {
      try {
        // WechatSI 插件需要你在 app.json 里配置 plugins: { WechatSI: { ... } }
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const plugin = requirePlugin('WechatSI');
        this.manager = plugin?.getRecordRecognitionManager?.();
      } catch (e) {
        this.manager = null;
      }

      const { manager } = this;
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
        });
        this.updateBubbleClass();
      };

      manager.onError = (err: any) => {
        this.setData({
          isManagerBusy: false,
          managerRecording: false,
          processStatus: 'error',
          interactStatus: 'normal',
          translateResult: '',
          activeBtnCancel: false,
          activeBtnSend: false,
        });
        this.updateBubbleClass();

        wx.showToast({
          icon: 'none',
          title: '录音识别失败，请重试',
          duration: 2000,
        });

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

    // ==================== 权限管理 ====================
    async getVoiceAuthSetting() {
      return new Promise<boolean>((resolve, reject) => {
        wx.getSetting({
          success: (res) => {
            const authSetting = res.authSetting || {};
            // scope.record key 存在且值为 true：已授权
            // scope.record key 存在且值为 false：已永久拒绝
            // scope.record key 不存在：从未申请过
            const hasRequested = Object.prototype.hasOwnProperty.call(authSetting, 'scope.record');
            const recordAuthStatus = !!authSetting['scope.record'];
            // recordAuthSetting：true 表示已授权，false 表示未授权（含从未申请和已拒绝）
            const recordAuthSetting = recordAuthStatus;
            // recordAuthDenied：true 表示已永久拒绝（需引导去设置页）
            const recordAuthDenied = hasRequested && !recordAuthStatus;
            this.setData({ recordAuthSetting, recordAuthStatus, recordAuthDenied } as any);
            resolve(recordAuthSetting);
          },
          fail: () => reject(new Error('getSetting failed')),
        });
      });
    },

    async applyAuth() {
      return new Promise<boolean>((resolve, reject) => {
        wx.authorize({
          scope: 'scope.record',
          success: () => {
            this.setData({ recordAuthSetting: true, recordAuthStatus: true });
            resolve(true);
          },
          fail: (err) => {
            this.setData({ recordAuthSetting: false, recordAuthStatus: false });
            reject(new Error(err?.errMsg || 'authorize failed'));
          },
        });
      });
    },

    // 用户从设置页返回后的回调（button open-type="openSetting" 触发）
    onOpenSetting(e: any) {
      const authSetting = e?.detail?.authSetting || {};
      const recordAuthSetting = !!authSetting['scope.record'];
      const recordAuthStatus = recordAuthSetting;
      this.setData({ recordAuthSetting, recordAuthStatus });
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
          // 已永久拒绝：button open-type="openSetting" 会自动引导用户去设置页，这里只退出即可
          if ((this.data as any).recordAuthDenied) {
            this.setData({ isStarted: false });
            return;
          }
          // 从未申请过：弹出系统授权弹窗
          await this.applyAuth();
        }
      } catch (error) {
        // 授权弹窗被拒绝，退出
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

      // 只有在录音真正开始后，才调用 stop
      if (this.manager && this.data.managerRecording) {
        this.manager.stop();
      }

      if (this.data.interactStatus === 'release_cancel') {
        // 取消时不让 onStop 把 UI 推到 confirm
        this.setData({ ignoreNextOnStop: true });
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
      this.triggerEvent('cancel');
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
      this.triggerEvent('send', {
        voicePath: this.data.voiceInfo.voicePath,
        voiceText: this.data.voiceInfo.voiceText,
        duration: this.data.voiceInfo.duration,
      });
      this.resetState();
    },

    handleSendVoiceMsg() {
      if (this.data.processStatus === 'error') return;
      this.triggerEvent('recognize', this.data.translateResult);
      this.resetState();
    },

    handleCancelSend() {
      if (this.data.processStatus === 'error') {
        this.resetState();
        return;
      }
      this.triggerEvent('cancel');
      this.resetState();
    },

    onTranslateInput(e: WechatMiniprogram.Input) {
      this.setData({ translateResult: (e.detail?.value ?? '') as string });
    },

    // ============= 按钮按压态（用于 class active） =============
    onCancelBtnTouchStart() {
      if (this.data.processStatus === 'error') return;
      this.setData({ activeBtnCancel: true });
    },
    onCancelBtnTouchEnd() {
      this.setData({ activeBtnCancel: false });
    },
    onSendBtnTouchStart() {
      if (this.data.processStatus === 'error') return;
      this.setData({ activeBtnSend: true });
    },
    onSendBtnTouchEnd() {
      this.setData({ activeBtnSend: false });
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
      // 绑定方法到 this.data（对齐 chat-sender.ts 的写法）
      this.data.initRecordManager = this.initRecordManager.bind(this);
      this.data.updateBubbleClass = this.updateBubbleClass.bind(this);
      this.data.getVoiceAuthSetting = this.getVoiceAuthSetting.bind(this);
      this.data.applyAuth = this.applyAuth.bind(this);
      this.data.onOpenSetting = this.onOpenSetting.bind(this);
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
      this.data.onCancelBtnTouchStart = this.onCancelBtnTouchStart.bind(this);
      this.data.onCancelBtnTouchEnd = this.onCancelBtnTouchEnd.bind(this);
      this.data.onSendBtnTouchStart = this.onSendBtnTouchStart.bind(this);
      this.data.onSendBtnTouchEnd = this.onSendBtnTouchEnd.bind(this);
      this.data.resetState = this.resetState.bind(this);

      this.initRecordManager();
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
      this.resetState();
    },
  };
}
