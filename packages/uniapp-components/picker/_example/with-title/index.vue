<template>
  <view>
    <t-cell
      t-class="mb-16"
      title="带标题选择器"
      arrow
      hover
      :note="cityText"
      @click="onTitlePicker"
    />

    <t-cell
      title="无标题选择器"
      arrow
      hover
      :note="city2Text"
      @click="onWithoutTitlePicker"
    />

    <t-picker
      v-model:visible="cityVisible"
      :value="cityValue"
      data-key="city"
      :title="cityTitle"
      cancel-btn="取消"
      confirm-btn="确认"
      :using-custom-navbar="!isMPAlipay"
      @change="onPickerChange($event, { key: 'city' })"
      @pick="onColumnChange($event, { key: 'city' })"
      @cancel="onPickerCancel($event, { key: 'city' })"
    >
      <t-picker-item :options="citys" />
    </t-picker>

    <t-picker
      v-model:visible="city2Visible"
      :value="city2Value"
      data-key="city2"
      :title="city2Title"
      cancel-btn="取消"
      confirm-btn="确认"
      :using-custom-navbar="!isMPAlipay"
      @change="onPickerChange($event, { key: 'city2' })"
      @pick="onColumnChange($event, { key: 'city2' })"
      @cancel="onPickerCancel($event, { key: 'city2' })"
    >
      <t-picker-item :options="citys" />
    </t-picker>
  </view>
</template>

<script>
import TCell from 'tdesign-uniapp/cell/cell.vue';
import TPicker from 'tdesign-uniapp/picker/picker.vue';
import TPickerItem from 'tdesign-uniapp/picker-item/picker-item.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TCell,
    TPicker,
    TPickerItem,
  },
  data() {
    return {
      cityText: '',
      city2Text: '',
      cityValue: [],
      city2Value: [],
      cityTitle: '',
      city2Title: '',

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
      city2Visible: false,
    };
  },
  created() {},
  methods: {
    onColumnChange(e, { key }) {
      console.log('picker pick:', { e, key });
    },
    onPickerChange(e, { key }) {
      const { value } = e;
      console.log('picker change:', e);

      this[`${key}Visible`] = false;
      this[`${key}Value`] = value;
      this[`${key}Text`] = value.join(' ');
    },
    onPickerCancel(e, { key }) {
      console.log('picker1 cancel:', e, key);
      this[`${key}Visible`] = false;
    },
    onTitlePicker() {
      this.cityVisible = true;
      this.cityTitle =  '选择城市';
    },
    onWithoutTitlePicker() {
      this.city2Visible = true;
      this.city2Title = '';
    },
  },
};
</script>
<style>
:deep(.mb-16) {
    margin-bottom: 32rpx;
}
</style>
