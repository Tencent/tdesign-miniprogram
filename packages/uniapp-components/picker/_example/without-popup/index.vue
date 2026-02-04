<template>
  <view>
    <t-picker
      :visible="cityVisible"
      :value="cityValue"
      :use-popup="false"
      data-key="city"
      :title="cityTitle"
      cancel-btn="取消"
      confirm-btn="确认"
      :using-custom-navbar="!isMPAlipay"
      @update:visible="cityVisible = $event"
      @change="onPickerChange($event, { key: 'city' })"
      @pick="onColumnChange($event, { key: 'city' })"
      @cancel="onPickerCancel($event, { key: 'city' })"
    >
      <t-picker-item :options="citys" />
    </t-picker>
  </view>
</template>

<script>
import TPicker from '@tdesign/uniapp/picker/picker.vue';
import TPickerItem from '@tdesign/uniapp/picker-item/picker-item.vue';
export default {
  components: {
    TPicker,
    TPickerItem,
  },
  data() {
    return {
      cityValue: [],
      cityTitle: '',

      citys: [
        {
          label: '北京市',
          value: '北京市',
        },
        {
          label: '上海市',
          value: '上海市',
        },
        {
          label: '广州市',
          value: '广州市',
        },
        {
          label: '深圳市',
          value: '深圳市',
        },
        {
          label: '成都市',
          value: '成都市',
        },
      ],

      cityVisible: false,
    };
  },
  created() {},
  methods: {
    onColumnChange(e) {
      console.log('picker pick:', e);
    },
    onPickerChange(e, { key }) {
      const { value } = e;
      console.log('picker change:', e);
      this[`${key}Visible`] = false;
      this[`${key}Value`] = value;
      this[`${key}Text`] = value.join(' ');
    },
    onPickerCancel(e, { key }) {
      console.log(e, '取消');
      console.log('picker1 cancel:');
      this[`${key}Visible`] = false;
    },
  },
};
</script>
<style>
.mb-16 {
    margin-bottom: 32rpx;
}
</style>
