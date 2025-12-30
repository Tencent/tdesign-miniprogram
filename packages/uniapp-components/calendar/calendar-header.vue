<template>
  <view
    :id="tId"
    :class="' ' + tClass + ' ' + classPrefix + ' '+(switchMode !== 'none' ? classPrefix + '__with-action' : '')"
  >
    <view
      v-if="switchMode !== 'none'"
      :class="classPrefix + '__action'"
    >
      <view
        v-if="switchMode === 'year-month'"
        :class="utils.cls(classPrefix + '__icon', [['disabled', preYearBtnDisable]])"
        :data-disabled="preYearBtnDisable"
        data-type="pre-year"
        @click="handleSwitchModeChange"
      >
        <TIcon name="chevron-left-double" />
      </view>
      <view
        :class="utils.cls(classPrefix + '__icon', [['disabled', prevMonthBtnDisable]])"
        :data-disabled="prevMonthBtnDisable"
        data-type="pre-month"
        @click="handleSwitchModeChange"
      >
        <TIcon name="chevron-left" />
      </view>
    </view>
    <view :class="classPrefix + '__title'">
      {{ title }}
    </view>
    <view
      v-if="switchMode !== 'none'"
      :class="classPrefix + '__action'"
    >
      <view
        :class="utils.cls(classPrefix + '__icon', [['disabled', nextMonthBtnDisable]])"
        :data-disabled="nextMonthBtnDisable"
        data-type="next-month"
        @click="handleSwitchModeChange"
      >
        <TIcon name="chevron-right" />
      </view>
      <view
        v-if="switchMode === 'year-month'"
        :class="utils.cls(classPrefix + '__icon', [['disabled', nextYearBtnDisable]])"
        :data-disabled="nextYearBtnDisable"
        data-type="next-year"
        @click="handleSwitchModeChange"
      >
        <TIcon name="chevron-right-double" />
      </view>
    </view>
  </view>
</template>
<script>
import TIcon from '../icon/icon.vue';
import utils from '../common/utils.wxs';
import props from './calendar-header.props';
import { getMonthTitle } from './computed';

export default {
  name: 'TCalendarHeader',
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TIcon,
  },
  props: {
    ...props,
  },
  emits: [
    'handleSwitchModeChange',
  ],
  data() {
    return {
      utils,
    };
  },
  watch: {

  },
  mounted() {

  },
  methods: {
    handleSwitchModeChange(...args) {
      this.$emit('handleSwitchModeChange', ...args);
    },
    getMonthTitle,
  },
};

</script>

<style scoped>
@import './calendar.css';
</style>
