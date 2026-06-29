<template>
  <view
    :style="'' + tools._style([customStyle])"
    :class="classPrefix + ' ' + classPrefix + '--' + theme + ' ' + classPrefix + '--' + size + ' ' + tClass"
    aria-role="option"
  >
    <slot v-if="content !== 'default'" name="content" />
    <slot v-if="content !== 'default'" />
    <block v-else-if="theme == 'default' && !splitWithUnit">
      {{ formattedTime }}
    </block>
    <block v-else>
      <block v-for="(item, index) in timeRange" :key="index">
        <text :class="classPrefix + '__item ' + tClassCount">
          {{ formatUtil(timeData[timeRange[index]]) }}
        </text>

        <text
          v-if="splitWithUnit || timeRange.length - 1 !== index"
          :class="
            classPrefix + '__split ' + classPrefix + '__split--' + (splitWithUnit ? 'text' : 'dot') + ' ' + tClassSplit
          "
        >
          {{ splitWithUnit ? timeDataUnit[timeRange[index]] : ':' }}
        </text>
      </block>
    </block>
  </view>
</template>
<script>
import { prefix } from '../common/config';
import { uniComponent } from '../common/src/index';

import tools from '../common/utils.wxs';

import { format as formatUtil } from './computed.js';
import props from './props';
import { isSameSecond, parseFormat, parseTimeData, TimeDataUnit } from './utils';

const name = `${prefix}-count-down`;

export default {
  components: {},
  ...uniComponent({
    name,
    options: {
      styleIsolation: 'shared',
    },
    externalClasses: [`${prefix}-class`, `${prefix}-class-count`, `${prefix}-class-split`],
    props: {
      ...props,
    },
    data() {
      return {
        prefix,
        classPrefix: name,
        timeDataUnit: TimeDataUnit,
        // 用 Object.freeze 阻断 Vue3 对 timeData 内部 5 个字段的深度响应化，
        // 减少鸿蒙 V8 下 Proxy.set 的次数（高频 setTimeout 写 reactive 会触发 GC race -> SIGSEGV）
        timeData: Object.freeze(parseTimeData(0)),
        formattedTime: '0',
        tools,
        timeoutId: null,
        isInitialTime: false,
        timeRange: [],
        // 组件是否已销毁标记（非响应式，仅作为闭包标志使用）
        // 用于防止 setTimeout 回调在组件卸载后访问已销毁的 reactive 实例
        // 鸿蒙 (HarmonyOS) 端 V8 在该场景下会触发 SIGSEGV(SEGV_MAPERR)
        _destroyed: false,
      };
    },
    watch: {
      time: {
        handler() {
          this.reset();
        },
        immediate: true,
      },
    },
    mounted() {
      this._destroyed = false;
    },
    beforeUnmount() {
      this._destroyed = true;
      this.counting = false;
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    },
    methods: {
      formatUtil,
      start() {
        if (this.counting) {
          return;
        }

        this.counting = true;
        this.endTime = Date.now() + this.remain;
        this.doCount();
      },

      pause() {
        this.counting = false;
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
          this.timeoutId = null;
        }
      },

      reset() {
        this.pause();
        this.remain = this.time;
        this.updateTime(this.remain);

        if (this.autoStart && this.remain > 0) {
          this.start();
        }

        this.isInitialTime = true;
      },

      getTime() {
        return Math.max(this.endTime - Date.now(), 0);
      },

      updateTime(remain) {
        const { format } = this;
        this.remain = remain;
        const timeData = parseTimeData(remain);
        this.$emit('change', timeData);

        const { timeText } = parseFormat(remain, format);

        // timeRange 仅由 format(prop) 决定，初次或 format 变化时才赋值，
        // 避免每帧都写 reactive 数组造成鸿蒙端 V8 GC race。
        if (!this._lastFormat || this._lastFormat !== format) {
          this.timeRange = format.split(':');
          this._lastFormat = format;
        }
        // freeze 一下，禁止 Vue 深度响应化每帧的新对象
        this.timeData = Object.freeze(timeData);
        this.formattedTime = timeText.replace(/:/g, ' : ');

        if (remain === 0 && (this.counting || this.isInitialTime)) {
          this.pause();
          this.$emit('finish');
          this.counting = false;
        }
      },

      doCount() {
        // 毫秒模式下从 33ms (≈30fps) 降到 100ms (≈10fps)，肉眼仍流畅，
        // 但 Proxy.set 频率降低 3 倍，显著降低鸿蒙 V8 GC race 概率。
        let interval = this.millisecond ? 100 : 200;
        // #ifdef APP-HARMONY
        interval = this.millisecond ? 100 : 500;
        // #endif
        this.timeoutId = setTimeout(() => {
          // 组件已销毁，直接返回，避免对已失效的 reactive 实例做 set 操作
          // 修复鸿蒙端因 Vue3 Proxy set 已销毁对象触发 V8 SIGSEGV 崩溃
          if (this._destroyed) return;

          const time = this.getTime();

          if (this.millisecond) {
            this.updateTime(time);
          } else if (!isSameSecond(time, this.remain) || time === 0) {
            this.updateTime(time);
          }

          if (time !== 0 && !this._destroyed) {
            this.doCount();
          }
        }, interval);
      },
    },
  }),
};
</script>
<style scoped src="./count-down.css"></style>
