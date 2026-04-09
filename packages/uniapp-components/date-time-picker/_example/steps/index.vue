<template>
  <view>
    <t-cell
      title="选择时间"
      hover
      :note="text || ''"
      arrow
      t-class="panel-item"
      @click="showPicker"
    />

    <t-date-time-picker
      :visible="visible"
      title="选择时间"
      :value="value"
      format="HH:mm:ss"
      :mode="['null', 'second']"
      :steps="{ minute: 5 }"
      @update:visible="visible = $event"
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
      text: '',
      value: '10:00:00',
      visible: false,
    };
  },
  created() {},
  methods: {
    showPicker() {
      this.visible = true;
    },
    hidePicker() {
      this.visible = false;
    },
    onConfirm(e) {
      const { value } = e;
      console.log('confirm', value);
      this.value = value;
      this.text = value;
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
