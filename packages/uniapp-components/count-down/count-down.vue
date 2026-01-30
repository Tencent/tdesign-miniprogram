<template>
  <view
    :style="tools._style([customStyle])"
    :class="classPrefix + ' ' + classPrefix + '--' + theme + ' ' + classPrefix + '--' + size + ' ' + tClass"
    aria-role="option"
  >
    <slot
      v-if="content !== 'default'"
      name="content"
    />
    <slot v-if="content !== 'default'" />
    <block v-else-if="theme == 'default' && !splitWithUnit">
      {{ formattedTime }}
    </block>
    <block v-else>
      <block
        v-for="(item, index) in timeRange"
        :key="index"
      >
        <text :class="classPrefix + '__item ' + tClassCount">
          {{ formatUtil(timeData[timeRange[index]]) }}
        </text>

        <text
          v-if="splitWithUnit || timeRange.length - 1 !== index"
          :class="classPrefix + '__split ' + classPrefix + '__split--' + (splitWithUnit ? 'text' : 'dot') + ' ' + tClassSplit"
        >
          {{ splitWithUnit ? timeDataUnit[timeRange[index]] : ':' }}
        </text>
      </block>
    </block>
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { isSameSecond, parseFormat, parseTimeData, TimeDataUnit } from './utils';
import tools from '../common/utils.wxs';
import { format as formatUtil } from './computed.js';


const name = `${prefix}-count-down`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-count`,
    `${prefix}-class-split`,
  ],
  components: {
    TIcon,
  },
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      timeDataUnit: TimeDataUnit,
      timeData: parseTimeData(0),
      formattedTime: '0',
      tools,
      timeoutId: null,
      isInitialTime: false,
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

  },
  beforeUnMount() {
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
      this.timeoutId && clearTimeout(this.timeoutId);
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

      const timeRange = format.split(':');

      this.timeRange = timeRange;
      this.timeData = timeData;
      this.formattedTime = timeText.replace(/:/g, ' : ');

      if (remain === 0 && (this.counting || this.isInitialTime)) {
        this.pause();
        this.$emit('finish');
        this.counting = false;
      }
    },

    doCount() {
      this.timeoutId = setTimeout(() => {
        const time = this.getTime();

        if (this.millisecond) {
          this.updateTime(time);
        } else if (!isSameSecond(time, this.remain) || time === 0) {
          this.updateTime(time);
        }

        if (time !== 0) {
          this.doCount();
        }
      }, 33); // 30 帧，因此 1000 / 30 = 33
    },
  },
});
</script>
<style scoped>
@import './count-down.css';
</style>
