<template>
  <view>
    <t-cell
      title="选择日期时间"
      hover
      :note="datetimeText"
      arrow
      data-mode="datetime"
      t-class="panel-item"
      @click="showPicker($event, { mode: 'datetime' })"
    />

    <!-- 年月日时分 -->
    <t-date-time-picker
      v-model:visible="datetimeVisible"
      title="选择日期和时间"
      mode="second"
      :value="datetime"
      format="YYYY-MM-DD HH:mm:ss"
      @change="onConfirm"
      @pick="onColumnChange"
      @cancel="hidePicker"
    />
  </view>
</template>

<script>
import TCell from '@tdesign/uniapp/cell/cell.vue';
import TDateTimePicker from '@tdesign/uniapp/date-time-picker/date-time-picker.vue';
export default {
  components: {
    TCell,
    TDateTimePicker,
  },
  data() {
    return {
      mode: '',
      datetimeVisible: false,
      datetime: new Date('2021-12-23').getTime(),
      datetimeText: '',
    };
  },
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
    margin-bottom: 32rpx;
}
</style>
