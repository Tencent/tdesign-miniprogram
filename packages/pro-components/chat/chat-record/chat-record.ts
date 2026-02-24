import { SuperComponent, wxComponent } from '../../../components/common/src/index';
import config from '../../../components/common/config';
import props from './props';
import { TouchStatus, RecordStatus, ComponentStatus, CustomFocusEvent, CustomTouchEvent } from './type';

declare const wx: any;
declare function requirePlugin(name: string): any;

const { prefix } = config;
const name = `${prefix}-chat-record`;

// 插件管理器（延迟加载，错误处理）
let manager: any = null;
const getManager = () => {
  if (!manager) {
    try {
      const plugin = requirePlugin('WechatSI');
      manager = plugin?.getRecordRecognitionManager?.() || null;
    } catch (e) {
      console.error('WechatSI 插件加载失败:', e);
    }
  }
  return manager;
};

@wxComponent()
export default class ChatRecord extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  properties = props;

  // 实例变量，避免多组件间共享
  private startRecordTimer: ReturnType<typeof setTimeout> | null = null;

  private recordTimer: ReturnType<typeof setInterval> | null = null;

  data = {
    classPrefix: name,
    showMask: false,
    touchStatus: 'bottom',
    startTime: 0,
    recordCountDown: -1,
    translateResult: '',
    voiceInfo: {
      voicePath: '',
      duration: 0,
    },
    recordStatus: '',
    recordAuthSetting: false,
    recordAuthStatus: true,
    isStarted: false,
    bottomHeight: 0,
    autoSendHeight: true,
    windowHeight: 0,
    translateSuccess: false,
    showRecordCountDown: false,
    status: 'normal' as ComponentStatus,
    hasSpeechInputSlot: true,
    hasSpeechNoAuthSlot: true,
  };

  observers = {
    translateResult() {
      this.setData({
        translateSuccess: this.data.translateResult !== '-1' && !!this.data.translateResult,
      });
    },
    recordCountDown() {
      this.setData({
        showRecordCountDown: this.data.recordCountDown >= 0,
      });
    },
    'touchStatus, recordStatus, translateResult'() {
      const translateSuccess = this.data.translateResult !== '-1' && !!this.data.translateResult;
      let status: ComponentStatus = 'normal';

      if (this.data.touchStatus === 'top') {
        status = 'cancel';
      } else if (this.data.recordStatus === 'recording') {
        status = 'recording';
      } else if (this.data.recordStatus === 'thinking') {
        status = 'thinking';
      } else if (this.data.recordStatus === 'stop' && !translateSuccess) {
        status = 'unknow';
      } else if (this.data.recordStatus === 'stop' && translateSuccess) {
        status = 'complete';
      } else if (this.data.recordStatus === 'error') {
        status = 'error';
      }

      this.setData({ status });
    },
  };

  lifetimes = {
    attached() {
      this.initRecorderManager();
      this.getWindowHeight();
    },
    detached() {
      if (this.recordTimer) {
        clearInterval(this.recordTimer);
        this.recordTimer = null;
      }
      if (this.startRecordTimer) {
        clearTimeout(this.startRecordTimer);
        this.startRecordTimer = null;
      }
      const mgr = getManager();
      if (mgr) {
        mgr.stop();
      }
    },
  };

  /**
   * 初始化同声传译插件
   */
  initRecorderManager(): void {
    const mgr = getManager();
    if (!mgr) {
      console.warn('语音插件未加载，语音功能不可用');
      return;
    }

    mgr.onStop = (res): void => {
      const { tempFilePath, duration } = res;

      if (this.data.touchStatus === 'top') {
        this.resetRecordState();
        return;
      }

      this.setData({
        'voiceInfo.voicePath': tempFilePath,
        'voiceInfo.duration': Math.floor(duration / 1000) || 1,
        recordStatus: 'stop' as RecordStatus,
        touchStatus: '' as TouchStatus,
      });
    };

    mgr.onStart = (): void => {
      this.setData({
        recordStatus: 'thinking' as RecordStatus,
      });
    };

    mgr.onRecognize = (res): void => {
      if (res.result && !res.end) {
        this.setData({
          recordStatus: 'recording' as RecordStatus,
          translateResult: res.result,
        });
      }
    };

    mgr.onError = (res): void => {
      this.setData({
        recordStatus: 'error' as RecordStatus,
        touchStatus: '' as TouchStatus,
        translateResult: '-1',
      });

      wx.showToast({
        icon: 'none',
        title: res.msg || '录音识别失败，请重试',
        duration: 2000,
      });
    };
  }

  /**
   * 重置录音状态
   */
  resetRecordState(): void {
    this.setData({
      showMask: false,
      translateResult: '',
      recordStatus: '' as RecordStatus,
      touchStatus: '' as TouchStatus,
      recordCountDown: -1,
      startTime: 0,
    });
  }

  /**
   * 获取窗口高度
   */
  getWindowHeight(): void {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowHeight: res.windowHeight,
        });
      },
    });
  }

  /**
   * 打开设置页授权
   */
  openVoiceSetting(): void {
    wx.getSetting({
      success: (res) => {
        const authSetting = res.authSetting['scope.record'];
        if (authSetting === true) {
          // 已授权
          this.setData({
            recordAuthSetting: true,
            recordAuthStatus: true,
          });
          wx.showToast({
            title: '已授权麦克风',
            icon: 'success',
          });
          return;
        }

        if (authSetting === false) {
          // 用户曾经拒绝过，需要引导去设置页面
          wx.showModal({
            title: '需要麦克风权限',
            content: '麦克风权限被拒绝，请前往微信设置开启',
            confirmText: '去设置',
            cancelText: '取消',
            success: (modalRes) => {
              if (modalRes.confirm) {
                wx.openSetting({
                  success: (settingRes) => {
                    const newAuthStatus = !!settingRes.authSetting['scope.record'];
                    this.setData({
                      recordAuthSetting: newAuthStatus,
                      recordAuthStatus: newAuthStatus,
                    });
                    if (newAuthStatus) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                      });
                    }
                  },
                  fail: (err) => {
                    console.error('打开设置失败:', err);
                    wx.showToast({
                      title: '打开设置失败',
                      icon: 'none',
                    });
                  },
                });
              }
            },
          });
        } else {
          // 未申请过，尝试直接申请
          this.applyAuthWithFallback();
        }
      },
      fail: (err) => {
        console.error('获取设置失败:', err);
        // 降级处理：直接尝试申请
        this.applyAuthWithFallback();
      },
    });
  }

  /**
   * 带降级的授权申请
   */
  applyAuthWithFallback(): void {
    wx.authorize({
      scope: 'scope.record',
      success: () => {
        this.setData({
          recordAuthSetting: true,
          recordAuthStatus: true,
        });
        wx.showToast({
          title: '授权成功',
          icon: 'success',
        });
      },
      fail: (err) => {
        console.error('授权申请失败:', err);
        this.handleAuthFail(err);
      },
    });
  }

  /**
   * 处理授权失败
   */
  handleAuthFail(err: any): void {
    // 判断是否是系统权限问题
    const errMsg = err.errMsg || '';

    if (errMsg.includes('system') || errMsg.includes('denied')) {
      // 系统级权限被拒绝
      wx.showModal({
        title: '需要系统麦克风权限',
        content:
          '请检查手机系统设置：\n\n1. 进入手机「设置」>「应用管理」>「微信」\n2. 开启「麦克风」权限\n3. 返回小程序重试',
        showCancel: false,
        confirmText: '我知道了',
      });
    } else {
      // 普通拒绝
      wx.showModal({
        title: '授权失败',
        content: '无法使用语音输入功能。请在「设置」中允许小程序使用麦克风。',
        confirmText: '去设置',
        cancelText: '取消',
        success: (res) => {
          if (res.confirm) {
            wx.openSetting();
          }
        },
      });
    }

    this.setData({
      recordAuthSetting: false,
      recordAuthStatus: false,
    });
  }

  /**
   * 获取语音授权状态
   */
  getVoiceAuthSetting(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: (res) => {
          const authSettings = Object.keys(res.authSetting);
          const recordAuthSetting = authSettings.includes('scope.record');
          const recordAuthStatus = !!res.authSetting['scope.record'];
          this.setData({
            recordAuthSetting,
            recordAuthStatus,
          });
          resolve(recordAuthSetting);
        },
        fail: () => {
          reject(new Error('获取语音授权设置失败'));
        },
      });
    });
  }

  /**
   * 申请授权
   */
  applyAuth(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      wx.authorize({
        scope: 'scope.record',
        success: () => {
          this.setData({
            recordAuthSetting: true,
            recordAuthStatus: true,
          });
          resolve(true);
        },
        fail: () => {
          this.setData({
            recordAuthSetting: false,
            recordAuthStatus: false,
          });
          reject(new Error('语音授权申请失败'));
        },
      });
    });
  }

  /**
   * 修改语音转文字结果
   */
  onTranslateResultChange(value: string): void {
    this.setData({
      translateResult: value,
    });
  }

  /**
   * 直接发送语音消息
   */
  handleSendVoiceMsg(): void {
    if (this.data.translateResult && this.data.translateResult !== '-1') {
      this.sendVoiceMsg(this.data.translateResult);
    }
    this.resetRecordState();
  }

  /**
   * 取消发送语音
   */
  handleCancelSend(): void {
    this.resetRecordState();
  }

  /**
   * 开始录音
   */
  async startRecord(e?: CustomTouchEvent): Promise<void> {
    if (this.data.isStarted) {
      return;
    }

    // 阻止默认行为，防止冒泡
    if (e?.preventDefault) {
      e.preventDefault();
    }

    const mgr = getManager();
    if (!mgr) {
      wx.showToast({
        title: '语音功能暂不可用',
        icon: 'none',
      });
      return;
    }

    this.setData({ isStarted: true });

    try {
      await this.getVoiceAuthSetting();
      if (!this.data.recordAuthSetting) {
        await this.applyAuth();
        this.setData({ isStarted: false });
        return;
      }
    } catch (error) {
      console.error('授权检查失败', error);
      this.setData({ isStarted: false });
      return;
    }

    this.setData({
      touchStatus: 'bottom' as TouchStatus,
      startTime: new Date().getTime(),
    });

    this.startRecordTimer = setTimeout(() => {
      if (!this.data.isStarted) {
        return;
      }

      this.setData({ showMask: true });

      const currentMgr = getManager();
      if (!currentMgr) {
        this.setData({ isStarted: false });
        return;
      }

      currentMgr.start({ duration: 30000, lang: 'zh_CN' });

      this.recordTimer = setInterval(() => {
        const recordTime = new Date().getTime() - this.data.startTime;
        if (recordTime > 50000) {
          if (this.data.recordCountDown === -1) {
            this.setData({ recordCountDown: 10 });
          } else {
            this.setData({ recordCountDown: this.data.recordCountDown - 1 });
          }
        }
        if (recordTime > 60000) {
          this.stopRecord();
        }
      }, 1000);
    }, 500);
  }

  /**
   * 结束录音
   */
  stopRecord(): void {
    this.setData({ isStarted: false });

    if (this.recordTimer) {
      clearInterval(this.recordTimer);
      this.recordTimer = null;
    }
    if (this.startRecordTimer) {
      clearTimeout(this.startRecordTimer);
      this.startRecordTimer = null;
    }

    this.setData({ recordCountDown: -1 });

    if (!this.data.recordAuthStatus) {
      this.setData({
        showMask: false,
        startTime: 0,
      });
      return;
    }

    if (this.data.startTime === 0) {
      return;
    }

    const recordTime = new Date().getTime() - this.data.startTime;
    const mgr = getManager();

    if (this.data.touchStatus === 'top') {
      if (mgr) {
        mgr.stop();
      }
      this.resetRecordState();
      this.setData({ startTime: 0 });
      wx.showToast({
        icon: 'none',
        title: '已取消发送',
        duration: 1500,
      });
      return;
    }

    if (recordTime > 500) {
      this.setData({
        'voiceInfo.duration': Math.floor(recordTime / 1000) || 1,
        startTime: 0,
      });

      if (mgr) {
        mgr.stop();
      }
    } else {
      this.setData({
        showMask: false,
        startTime: 0,
      });
      if (mgr) {
        mgr.stop();
      }
      wx.showToast({
        icon: 'none',
        title: '说话时间太短',
      });
    }
  }

  /**
   * 录音过程中手指移动事件
   */
  touchmove(e: CustomTouchEvent): void {
    if (!this.data.isStarted || !this.data.showMask) {
      return;
    }

    const bottomHeight = 150;
    const { changedTouches } = e;
    if (!changedTouches || !changedTouches[0]) {
      return;
    }

    const { clientY } = changedTouches[0];
    const oldStatus = this.data.touchStatus;

    let newTouchStatus: TouchStatus;
    if (clientY > this.data.windowHeight - bottomHeight) {
      newTouchStatus = 'bottom';
    } else {
      newTouchStatus = 'top';
    }

    if (oldStatus !== newTouchStatus) {
      this.setData({ touchStatus: newTouchStatus });
    }
  }

  /**
   * 录音过程中被系统事件打断，结束录音
   */
  touchcancel(): void {
    const mgr = getManager();
    if (mgr) {
      mgr.stop();
    }

    if (this.recordTimer) {
      clearInterval(this.recordTimer);
      this.recordTimer = null;
    }
    if (this.startRecordTimer) {
      clearTimeout(this.startRecordTimer);
      this.startRecordTimer = null;
    }

    this.resetRecordState();
    this.setData({ isStarted: false });
  }

  /**
   * 发送语音消息，触发recognize事件
   */
  sendVoiceMsg(voiceMsg: string): void {
    this.triggerEvent('recognize', voiceMsg);
  }

  /**
   * textarea获得焦点时
   */
  focusTextarea(e: CustomFocusEvent): void {
    if (this.data.autoSendHeight) {
      this.setData({
        bottomHeight: e.detail?.height || 0,
      });
    }
  }

  /**
   * textarea失去焦点时
   */
  blurTextarea(): void {
    this.setData({
      bottomHeight: 0,
    });
  }
}
