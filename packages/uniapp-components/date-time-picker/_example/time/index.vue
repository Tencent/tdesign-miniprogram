<template>
  <view>
    <view class="demo-desc">
      时分秒选择器
    </view>
    <t-cell
      title="选择时间"
      hover
      :note="secondText || ''"
      arrow
      data-mode="second"
      t-class="panel-item"
      @click="showPicker($event, { mode: 'second' })"
    />

    <view class="demo-desc">
      时分选择器
    </view>
    <t-cell
      title="选择时间"
      hover
      :note="minuteText || ''"
      arrow
      data-mode="minute"
      t-class="panel-item"
      @click="showPicker($event, { mode: 'minute' })"
    />

    <!-- 时分 -->
    <t-date-time-picker
      v-model:visible="secondVisible"
      title="选择时间"
      :mode="['null', 'second']"
      :value="second"
      format="HH:mm:ss"
      @change="onConfirm"
      @pick="onColumnChange"
      @cancel="hidePicker"
    />

    <!-- 时分 -->
    <t-date-time-picker
      v-model:visible="minuteVisible"
      title="选择时间"
      :mode="['null', 'minute']"
      :start="start"
      :value="minute"
      format="HH:mm"
      @change="onConfirm"
      @pick="onColumnChange"
      @cancel="hidePicker"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell.vue';
import tDateTimePicker from 'tdesign-uniapp/date-time-picker/date-time-picker.vue';
export default {
  components: {
    tCell,
    tDateTimePicker,
  },
  data() {
    return {
      mode: '',
      second: '10:00:00',
      minute: '23:59',
      start: '2025-04-29 00:00:00',
      secondText: '',
      minuteText: '',
      secondVisible: false,
      minuteVisible: false,
    };
  },
  created() {},
  methods: {
    showPicker(e, { mode }) {
      this.mode = mode;
      this[`${mode}Visible`] = true;
    },
    hidePicker() {
      const { mode } = this;
      this[`${mode}Visible`] = false;
    },
    onConfirm(e) {
      const { value } = e;
      const { mode } = this;
      console.log('confirm', value);
      this[mode] = value;
      this[`${mode}Text`] = value;
      this.hidePicker();
    },
    onColumnChange(e) {
      console.log('pick', e.value);
    },
  },
};
</script>
<style>
.panel-item {
    margin: 32rpx 0;
}
</style>
