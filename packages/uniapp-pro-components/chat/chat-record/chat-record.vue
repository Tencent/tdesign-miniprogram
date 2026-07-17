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
                <text class="rollback-icon"> ↩ </text>
              </view>
              <text class="btn-text">
                {{ globalConfig.cancelText }}
              </text>
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
              <text class="send-btn-text">
                {{ globalConfig.sendText }}
              </text>
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
import { createDefaultAdapter } from './adapters/index';

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
    emits: ['recognize', 'error', 'cancel'],
    data() {
      return {
        classPrefix: name,

        // 权限
        recordAuthSetting: false,
        // 是否已授权录音（未授权时应展示去设置/授权引导）
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
        managerRecording: false,
        waveList: Array.from({ length: 27 }).map((_, i) => i + 1),
        bubbleStatusClass: 'bubble-blue',
      };
    },

    watch: {
      adapter: {
        handler(newAdapter, oldAdapter) {
          // 外部替换 adapter：卸载旧的，绑定新的
          if (oldAdapter && oldAdapter !== this.iAdapter) {
            this.iUnbindAdapterEvents(oldAdapter);
          }
          this.iResolveAdapter();
          this.iBindAdapterEvents();
          // 刷新权限状态
          this.iRefreshAuthStatus().catch(() => null);
        },
      },
    },

    created() {
      // iAdapter 为非响应式实例属性
      this.iAdapter = null;
      this.iAdapterListeners = null;
      this.iResolveAdapter();
      this.iBindAdapterEvents();
    },

    mounted() {
      // 进入页面时检查一次权限
      this.iRefreshAuthStatus().catch(() => null);
    },

    beforeDestroy() {
      if (this.iAdapter) {
        try {
          this.iUnbindAdapterEvents(this.iAdapter);
          this.iAdapter.destroy();
        } catch (e) {
          // ignore
        }
      }
      this.iAdapter = null;
      this.resetState();
    },

    methods: {
      // ==================== Adapter 装配 ====================
      iResolveAdapter() {
        // 优先使用外部注入的 adapter
        if (this.adapter && typeof this.adapter.start === 'function') {
          this.iAdapter = this.adapter;
        } else {
          // 按平台选择默认 adapter
          this.iAdapter = createDefaultAdapter();
        }
      },

      iBindAdapterEvents() {
        const adapter = this.iAdapter;
        if (!adapter) return;

        const onStart = () => {
          this.managerRecording = true;
          this.processStatus = 'recording';
          this.updateBubbleClass();
        };

        const onPartial = (payload) => {
          const voiceText = (payload && payload.result) || '';
          this.voiceInfo = { ...this.voiceInfo, voiceText };
          if (this.interactStatus === 'release_convert') {
            this.translateResult = voiceText;
          }
        };

        const onStop = (payload) => {
          this.managerRecording = false;
          this.isManagerBusy = false;

          // 用户手势判定"取消"时不进入发送流程
          if (this.processStatus === 'error') return;
          if (this.interactStatus === 'release_cancel') return;

          const tempFilePath = (payload && payload.tempFilePath) || '';
          const durationMs = (payload && payload.duration) || 0;
          const duration = Math.floor(durationMs / 1000) || 1;
          const voiceText = (payload && payload.result) || '';

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

          setTimeout(() => {
            this.resetState();
          }, 100);
        };

        const onError = (err) => {
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

        adapter.on('start', onStart);
        adapter.on('partial', onPartial);
        adapter.on('stop', onStop);
        adapter.on('error', onError);

        this.iAdapterListeners = { onStart, onPartial, onStop, onError };
      },

      iUnbindAdapterEvents(adapter) {
        if (!adapter || !this.iAdapterListeners) return;
        try {
          adapter.off('start', this.iAdapterListeners.onStart);
          adapter.off('partial', this.iAdapterListeners.onPartial);
          adapter.off('stop', this.iAdapterListeners.onStop);
          adapter.off('error', this.iAdapterListeners.onError);
        } catch (e) {
          // ignore
        }
        this.iAdapterListeners = null;
      },

      // ==================== 权限 ====================
      async iRefreshAuthStatus() {
        if (!this.iAdapter) return false;
        try {
          const ok = await this.iAdapter.checkAuth();
          this.recordAuthSetting = ok;
          this.recordAuthStatus = ok;
          return ok;
        } catch (e) {
          this.recordAuthSetting = false;
          this.recordAuthStatus = false;
          return false;
        }
      },

      async requestRecordAuth() {
        if (!this.iAdapter) return;
        const ok = await this.iAdapter.requestAuth();
        this.recordAuthSetting = ok;
        this.recordAuthStatus = ok;
      },

      updateBubbleClass() {
        const { interactStatus, processStatus } = this;
        let bubbleStatusClass = 'bubble-blue';
        if (interactStatus === 'release_cancel' || processStatus === 'error') {
          bubbleStatusClass = 'bubble-red';
        }
        this.bubbleStatusClass = bubbleStatusClass;
      },

      // ==================== 录音流程 ====================
      async startRecord(e) {
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
        const authed = await this.iRefreshAuthStatus();
        if (!authed) {
          const ok = await this.iAdapter.requestAuth();
          this.recordAuthSetting = ok;
          this.recordAuthStatus = ok;
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

        // 100ms 后开始录音（避免误触）
        if (startRecordTimer) {
          clearTimeout(startRecordTimer);
          startRecordTimer = null;
        }
        startRecordTimer = setTimeout(() => {
          if (!this.isStarted) return;

          if (!this.iAdapter) {
            this.iResolveAdapter();
            this.iBindAdapterEvents();
          }

          if (this.iAdapter) {
            this.isManagerBusy = true;
            const duration = this.duration ?? 60000;
            const lang = this.lang ?? 'zh_CN';
            Promise.resolve(this.iAdapter.start({ duration, lang })).catch((err) => {
              this.isManagerBusy = false;
              this.processStatus = 'error';
              this.updateBubbleClass();
              this.$emit('error', err);
            });
          } else {
            uni.showToast({
              icon: 'none',
              title: this.globalConfig?.missingPluginTip || '语音识别不可用',
            });
            this.processStatus = 'error';
            this.updateBubbleClass();
          }
        }, 100);

        if (recordTimer) {
          clearInterval(recordTimer);
          recordTimer = null;
        }
        recordTimer = setInterval(() => {
          // noop，预留计时/动画钩子
        }, 1000);
      },

      touchmove(e) {
        if (!this.isStarted || !this.showMask) return;
        if (this.processStatus !== 'recording') return;

        const touch = (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]);
        if (!touch) return;

        const deltaY = touch.clientY - this.startTouch.y;

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

        // 通知 adapter 停止录音
        if (this.iAdapter) {
          Promise.resolve(this.iAdapter.stop()).catch(() => null);
        }

        if (this.interactStatus === 'release_cancel') {
          this.activeBtnCancel = true;
          this.cancelRecord();
        }
        // 正常松手：等待 adapter stop 事件，onStop 中派发 recognize
      },

      touchcancel() {
        this.cancelRecord();
      },

      // ==================== 业务逻辑 ====================
      cancelRecord() {
        this.showMask = false;
        setTimeout(() => {
          this.resetState();
        }, 100);
        this.$emit('cancel');
      },

      convertToText() {
        this.processStatus = 'confirm';
        this.interactStatus = 'normal';
        this.translateResult = this.voiceInfo.voiceText;
        this.updateBubbleClass();
      },

      sendVoice() {
        this.$emit('recognize', {
          voicePath: this.voiceInfo.voicePath,
          voiceText: this.voiceInfo.voiceText,
          duration: this.voiceInfo.duration,
        });
        setTimeout(() => {
          this.resetState();
        }, 100);
      },

      handleSendVoiceMsg() {
        if (this.processStatus === 'error') {
          return;
        }

        this.$emit('recognize', {
          voicePath: this.voiceInfo.voicePath,
          voiceText: this.translateResult || this.voiceInfo.voiceText,
          duration: this.voiceInfo.duration,
        });

        this.showMask = false;
        setTimeout(() => {
          this.resetState();
        }, 100);
      },

      handleCancelSend() {
        if (this.processStatus === 'error') {
          this.resetState();
          return;
        }
        this.cancelRecord();
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

        if (this.iAdapter && this.managerRecording) {
          try {
            Promise.resolve(this.iAdapter.stop()).catch(() => null);
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
        this.updateBubbleClass();
      },
    },
  }),
};
</script>

<style scoped src="./chat-record.css"></style>
