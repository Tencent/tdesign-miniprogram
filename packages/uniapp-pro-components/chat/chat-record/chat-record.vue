<template>
  <view :class="classPrefix">
    <!-- hook：授权时按住说话 / 未授权引导授权 -->
    <view
      v-if="recordAuthStatus"
      :class="classPrefix + '-hook'"
      @touchstart.stop="startRecord"
      @touchend.stop="stopRecord"
      @touchmove.stop="touchmove"
      @touchcancel.stop="touchcancel"
    >
      <slot name="speechInput">
        <view>{{ globalConfig.holdToTalk }}</view>
      </slot>
    </view>

    <view v-else :class="[classPrefix + '-hook', classPrefix + '-hook--no-auth']" @click="requestRecordAuth">
      <slot name="speechNoAuth">
        <view>{{ globalConfig.requestAuth }}</view>
      </slot>
    </view>

    <!-- 遮罩 + 录音面板 -->
    <view :class="['cover-ng-bar', classPrefix + '-audio-input', showMask ? 'show' : '']">
      <!-- mask -->
      <view :class="classPrefix + '-audio-input__mask'" @click="handleCancelSend" />

      <view :class="classPrefix + '-audio-input__main'">
        <!-- 底部区域 -->
        <view
          v-if="processStatus === 'recording' || processStatus === 'confirm'"
          :class="[classPrefix + '-audio-input__ft', processStatus, interactStatus, 'fade-in']"
          :style="'bottom: ' + bottomHeight + 'rpx;'"
        >
          <!-- 录音阶段：音波动画（独立在提示文字上方） -->
          <view
            v-if="processStatus === 'recording'"
            :class="['audio-wave-outer', 'audio-wave', interactStatus === 'release_cancel' ? 'wave-red' : 'wave-blue']"
          >
            <view v-for="item in waveList" :key="item" class="wave-item" />
          </view>

          <!-- 提示文字：两条文字同时存在，通过位移+透明度做"跟手"上下切换动效 -->
          <view class="tips-text">
            <template v-if="processStatus === 'recording'">
              <view :class="['tips-item', 'tips-send', interactStatus === 'release_cancel' ? 'is-out-up' : 'is-in']">
                <text>{{ globalConfig.releaseToSend }}</text>
              </view>
              <view
                :class="['tips-item', 'tips-cancel', interactStatus === 'release_cancel' ? 'is-in' : 'is-out-down']"
              >
                <text>{{ globalConfig.releaseToCancel }}</text>
              </view>
            </template>
          </view>

          <!-- 录音阶段：全宽大按钮（纯色空按钮，仅承载手势） -->
          <view
            v-if="processStatus === 'recording'"
            :class="['record-main-btn', interactStatus === 'release_cancel' ? 'is-cancel' : 'is-record']"
            @touchstart.stop="startRecord"
            @touchend.stop="stopRecord"
            @touchmove.stop="touchmove"
            @touchcancel.stop="touchcancel"
          />

          <!-- 确认按钮区（Send/Cancel） -->
          <view
            v-if="processStatus === 'confirm' || processStatus === 'error'"
            :class="['confirm-actions', processStatus === 'error' ? 'is-error' : '']"
          >
            <view
              :class="[
                'action-btn',
                'btn-cancel',
                activeBtnCancel ? 'active' : '',
                processStatus === 'error' ? 'disabled' : '',
              ]"
              @click="handleCancelSend"
            >
              <view class="icon-wrapper">
                <text class="rollback-icon">↩</text>
              </view>
              <text class="btn-text">{{ globalConfig.cancelText }}</text>
            </view>
            <view
              :class="[
                'action-btn',
                'btn-send',
                activeBtnSend ? 'active' : '',
                processStatus === 'error' ? 'disabled' : '',
              ]"
              @click="handleSendVoiceMsg"
            >
              <text class="send-btn-text">{{ globalConfig.sendText }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { prefix } from '@tdesign/uniapp/common/config';
import { uniComponent } from '@tdesign/uniapp/common/src/index';
import props from './props';
import usingConfig from '../mixins/using-config';

const componentName = 'chat-record';
const name = `${prefix}-${componentName}`;

// 交互阈值配置（单位：px）
const MOVE_THRESHOLD_Y = 60;

// 语音录制定时器-模拟长按
let startRecordTimer = null;
let recordTimer = null;

export default {
  ...uniComponent({
    name,

    mixins: [usingConfig({ componentName })],

    props: {
      ...props,
    },

    data() {
      return {
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
        processStatus: 'idle', // idle | recording | processing | confirm | error
        interactStatus: 'normal', // normal | release_cancel

        // 录音数据
        voiceInfo: {
          voicePath: '',
          voiceText: '',
          duration: 0,
        },

        // 转文字结果
        translateResult: '',
        startTouch: { x: 0, y: 0 },
        isStarted: false,
        isManagerBusy: false,
        ignoreNextOnStop: false,
        managerRecording: false,
        waveList: Array.from({ length: 27 }).map((_, i) => i + 1),
        bubbleStatusClass: 'bubble-blue',
      };
    },

    created() {
      // manager 为非响应式实例属性
      this.manager = null;
      this.initRecordManager();
    },

    mounted() {
      // 进入页面时检查一次权限
      this.getVoiceAuthSetting().catch(() => null);
    },

    beforeDestroy() {
      if (this.manager) {
        try {
          this.manager.stop();
        } catch (e) {
          // ignore
        }
      }
      this.resetState();
    },

    methods: {
      initRecordManager() {
        try {
          // WechatSI 插件需要你在 app.json 里配置 plugins: { WechatSI: { ... } }
          // eslint-disable-next-line no-undef
          if (typeof requirePlugin === 'function') {
            const plugin = requirePlugin('WechatSI');
            this.manager = plugin?.getRecordRecognitionManager?.();
          }
        } catch (e) {
          this.manager = null;
        }

        const manager = this.manager;
        if (!manager) return;

        manager.onStart = () => {
          this.managerRecording = true;
          this.processStatus = 'recording';
          this.updateBubbleClass();
        };

        manager.onRecognize = (res) => {
          // res.result 实时识别结果；res.end 表示结束
          if (res?.result && !res?.end) {
            const voiceText = res.result;
            this.voiceInfo = {
              ...this.voiceInfo,
              voiceText,
            };
            if (this.interactStatus === 'release_convert') {
              this.translateResult = voiceText;
            }
          }
        };

        manager.onStop = (res) => {
          this.managerRecording = false;
          this.isManagerBusy = false;

          if (this.ignoreNextOnStop) {
            this.ignoreNextOnStop = false;
            return;
          }

          if (this.processStatus === 'error') return;

          const tempFilePath = res?.tempFilePath || '';
          const durationMs = res?.duration || 0;
          const duration = Math.floor(durationMs / 1000) || 1;
          const voiceText = res?.result || '';

          // 直接发送，不进入 confirm 状态
          this.voiceInfo = {
            voicePath: tempFilePath,
            voiceText,
            duration,
          };
          this.translateResult = voiceText;

          this.$emit('recognize', {
            voicePath: tempFilePath,
            voiceText,
            duration,
          });

          // 发送后重置状态
          setTimeout(() => {
            this.resetState();
          }, 100);
        };

        manager.onError = (err) => {
          uni.showToast({
            icon: 'none',
            title: this.globalConfig?.recognizeFailTip || '录音识别失败，请重试',
            duration: 2000,
          });
          this.isManagerBusy = false;
          this.managerRecording = false;
          this.processStatus = 'error';
          this.interactStatus = 'normal';
          this.translateResult = '';
          this.activeBtnCancel = false;
          this.activeBtnSend = false;
          this.showMask = false;
          this.updateBubbleClass();

          this.$emit('error', err);
        };
      },

      updateBubbleClass() {
        const { interactStatus, processStatus, translateResult, bottomHeight,
                activeBtnCancel, activeBtnSend } = this;
        let bubbleStatusClass = 'bubble-blue';
        if (interactStatus === 'release_cancel' || processStatus === 'error') {
          bubbleStatusClass = 'bubble-red';
        }
        this.bubbleStatusClass = bubbleStatusClass;

        // 通知外部 speechBubble 插槽同步状态
        this.$emit('statechange', {
          processStatus,
          interactStatus,
          translateResult,
          bottomHeight,
          activeBtnCancel,
          activeBtnSend,
        });
      },

      // 键盘高度监听已移至示例页面处理
      async getVoiceAuthSetting() {
        return new Promise((resolve, reject) => {
          uni.getSetting({
            success: (res) => {
              const authSetting = res.authSetting || {};
              const hasRequested = Object.prototype.hasOwnProperty.call(authSetting, 'scope.record');
              const recordAuthStatus = !!authSetting['scope.record'];
              const recordAuthSetting = recordAuthStatus;
              this.recordAuthSetting = recordAuthSetting;
              this.recordAuthStatus = recordAuthStatus;
              resolve(recordAuthSetting);
            },
            fail: () =>
              reject(
                new Error(this.globalConfig?.authSettingFail || '获取录音权限设置失败'),
              ),
          });
        });
      },

      async requestRecordAuth() {
        // 系统层检测：如果系统把"微信-麦克风"关了，这里会提示去系统设置
        const sysOk = await this.checkSystemMicPermission();
        if (!sysOk) return;

        try {
          // 先尝试直接弹授权框（必须在用户点击事件里调用）
          await uni.authorize({ scope: 'scope.record' });

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
          this.recordAuthSetting = false;
          this.recordAuthStatus = false;
          return false;
        }

        return new Promise((resolve, reject) => {
          uni.authorize({
            scope: 'scope.record',
            success: () => {
              this.recordAuthSetting = true;
              this.recordAuthStatus = true;
              resolve(true);
            },
            fail: (err) => {
              // 这里通常是用户拒绝（或已拒绝且不再询问）
              this.recordAuthSetting = false;
              this.recordAuthStatus = false;
              reject(err);
            },
          });
        });
      },

      /**
       * 检测系统层面的麦克风权限是否允许"微信"使用。
       */
      async checkSystemMicPermission() {
        // 低版本基础库可能没有该 API，缺失时默认继续走授权流程
        if (typeof uni.getAppAuthorizeSetting !== 'function') return true;

        try {
          const res = uni.getAppAuthorizeSetting();
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
        const { globalConfig } = this;
        uni.showModal({
          title: globalConfig?.systemMicTitle || '无法使用麦克风',
          content:
            globalConfig?.systemMicContent ||
            '检测到手机系统已关闭"微信"的麦克风权限。\n\n请到系统设置中开启：\n- iOS：设置 > 微信 > 麦克风\n- Android：设置 > 应用管理 > 微信 > 权限 > 麦克风\n\n开启后返回小程序再试。',
          showCancel: false,
        });
      },

      async openVoiceSetting() {
        // 先判断是否系统层禁用了微信麦克风；如果是，直接提示去系统设置
        const sysOk = await this.checkSystemMicPermission();
        if (!sysOk) return;

        uni.openSetting({
          success: (r) => {
            const recordAuthSetting = !!r.authSetting?.['scope.record'];
            const recordAuthStatus = !!r.authSetting?.['scope.record'];
            this.recordAuthSetting = recordAuthSetting;
            this.recordAuthStatus = recordAuthStatus;
          },
          fail: () => {
            uni.showToast({
              icon: 'none',
              title: this.globalConfig?.openSettingFail || '打开设置失败',
            });
          },
        });
      },

      // ==================== 授权设置回调 ====================
      onOpenSetting(e) {
        const { authSetting } = e;
        if (authSetting?.['scope.record']) {
          // 用户授权了录音权限
          this.recordAuthSetting = true;
          this.recordAuthStatus = true;
        } else {
          // 用户未授权录音权限
          this.recordAuthSetting = false;
          this.recordAuthStatus = false;
        }
      },

      // ==================== 录音流程 ====================
      async startRecord(e) {
        // 避免识别回调/stop 尚未完成又开始
        if (this.isManagerBusy) {
          uni.showToast({
            icon: 'none',
            title: this.globalConfig?.busyTip || '识别中，请稍候…',
          });
          return;
        }

        if (this.processStatus === 'error') {
          this.resetState();
        }

        this.isStarted = true;

        // 授权检查
        try {
          await this.getVoiceAuthSetting();
          if (!this.recordAuthSetting) {
            const ok = await this.applyAuth();
            if (!ok) {
              this.isStarted = false;
              return;
            }
            this.isStarted = false;
            return;
          }
        } catch (error) {
          this.isStarted = false;
          return;
        }

        // 记录起始触摸点
        const touch = e?.changedTouches?.[0];
        if (touch) {
          this.startTouch = { x: touch.clientX, y: touch.clientY };
        }

        this.showMask = true;
        this.processStatus = 'recording';
        this.interactStatus = 'normal';
        this.translateResult = '';
        this.voiceInfo = { voicePath: '', voiceText: '', duration: 0 };
        this.updateBubbleClass();

        // 100ms 后开始录音（与原组件一致）
        if (startRecordTimer) {
          clearTimeout(startRecordTimer);
          startRecordTimer = null;
        }
        startRecordTimer = setTimeout(() => {
          if (!this.isStarted) return;

          if (!this.manager) {
            this.initRecordManager();
          }

          if (this.manager) {
            this.isManagerBusy = true;
            const duration = this.duration ?? 60000;
            const lang = this.lang ?? 'zh_CN';
            this.manager.start({ duration, lang });
          } else {
            // 插件不可用
            uni.showToast({
              icon: 'none',
              title: this.globalConfig?.missingPluginTip || '缺少语音识别插件 WechatSI',
            });
            this.processStatus = 'error';
            this.updateBubbleClass();
          }
        }, 100);

        // 预留：如需显示计时/动画，可使用 recordTimer
        if (recordTimer) {
          clearInterval(recordTimer);
          recordTimer = null;
        }
        recordTimer = setInterval(() => {
          // noop
        }, 1000);
      },

      touchmove(e) {
        if (!this.isStarted || !this.showMask) return;
        if (this.processStatus !== 'recording') return;

        const touch = (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]);
        if (!touch) return;

        const deltaY = touch.clientY - this.startTouch.y;

        // 只有上滑取消，没有转文字
        let interactStatus = 'normal';
        if (deltaY < -MOVE_THRESHOLD_Y) {
          interactStatus = 'release_cancel';
        }

        if (interactStatus !== this.interactStatus) {
          this.interactStatus = interactStatus;
          this.updateBubbleClass();
        }
      },

      stopRecord() {
        if (this.processStatus !== 'recording') return;

        this.isStarted = false;

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
          if (this.managerRecording) {
            this.manager.stop();
          } else {
            // 录音尚未开始，取消启动
            this.ignoreNextOnStop = true;
          }
        }

        if (this.interactStatus === 'release_cancel') {
          // 取消时不让 onStop 把 UI 推到 confirm
          this.ignoreNextOnStop = true;
          this.activeBtnCancel = true;
          this.cancelRecord();
        } else {
          // 正常松手：等待 onStop 回调，自动进入 confirm 并发送
        }
      },

      touchcancel() {
        this.cancelRecord();
      },

      // ==================== 业务逻辑 ====================
      cancelRecord() {
        this.showMask = false;
        this.resetState();
      },

      convertToText() {
        this.processStatus = 'confirm';
        this.interactStatus = 'normal';
        this.translateResult = this.voiceInfo.voiceText;
        this.updateBubbleClass();
      },

      sendVoice() {
        // 发送语音原始信息（按原组件逻辑保留）
        this.$emit('recognize', {
          voicePath: this.voiceInfo.voicePath,
          voiceText: this.voiceInfo.voiceText,
          duration: this.voiceInfo.duration,
        });
        // 延迟重置状态，确保事件能够正确触发
        setTimeout(() => {
          this.resetState();
        }, 100);
      },

      handleSendVoiceMsg() {
        if (this.processStatus === 'error') {
          return;
        }

        // 发送语音消息，包含语音文件和转文字结果
        this.$emit('recognize', {
          voicePath: this.voiceInfo.voicePath,
          voiceText: this.translateResult || this.voiceInfo.voiceText,
          duration: this.voiceInfo.duration,
        });

        // 关闭弹窗
        this.showMask = false;
        // 延迟重置状态，确保事件能够正确触发
        setTimeout(() => {
          this.resetState();
        }, 100);
      },

      handleCancelSend() {
        if (this.processStatus === 'error') {
          this.resetState();
          return;
        }
        // 关闭弹窗
        this.showMask = false;
        // 延迟重置状态，确保事件能够正确触发
        setTimeout(() => {
          this.resetState();
        }, 100);
      },

      onTranslateInput(e) {
        this.translateResult = e.detail?.value ?? '';
        this.activeBtnCancel = !!e.detail?.value;
        this.activeBtnSend = !!e.detail?.value;
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

        if (this.manager && this.managerRecording) {
          try {
            this.manager.stop();
          } catch (e) {
            // ignore
          }
        }

        this.isStarted = false;
        this.managerRecording = false;
        this.showMask = false;
        this.processStatus = 'idle';
        this.interactStatus = 'normal';
        this.translateResult = '';
        this.voiceInfo = { voicePath: '', voiceText: '', duration: 0 };
        this.activeBtnCancel = false;
        this.activeBtnSend = false;
        this.isManagerBusy = false;
        this.ignoreNextOnStop = false;
        this.updateBubbleClass();
      },
    },
  }),
};
</script>

<style scoped>
@import './chat-record.css';
</style>
