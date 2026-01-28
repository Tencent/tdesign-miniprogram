<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
  <view>
    <t-cell
      t-class="mb-16"
      title="选择城市"
      arrow
      hover
      :note="cityText"
      @click="onCityPicker"
    />

    <t-cell
      t-class="mb-16"
      title="选择时间"
      arrow
      hover
      :note="dateText"
      @click="onSeasonPicker"
    />

    <t-picker
      v-model:visible="cityVisible"
      data-key="city"
      title="选择城市"
      cancel-btn="取消"
      confirm-btn="确认"
      :using-custom-navbar="!isMPAlipay"
      @change="onPickerChange($event, { key: 'city' })"
      @pick="onColumnChange($event, { key: 'city' })"
      @cancel="onPickerCancel($event, { key: 'city' })"
    >
      <t-picker-item
        :options="citys"
        :format="formatter"
      >
        <block
          v-for="(option, index) in citys"
          :key="index"
        >
          <view
            v-if="option.tag"
            :slot="'label-suffix--' + index"
            class="label-suffix"
          >
            <t-tag
              size="small"
              theme="primary"
            >
              {{ option.tag }}
            </t-tag>
          </view>
        </block>
      </t-picker-item>
    </t-picker>

    <t-picker
      v-model:visible="dateVisible"
      data-key="date"
      title="选择时间"
      cancel-btn="取消"
      confirm-btn="确认"
      :using-custom-navbar="!isMPAlipay"
      @change="onPickerChange($event, { key: 'date' })"
      @pick="onColumnChange($event, { key: 'date' })"
      @cancel="onPickerCancel($event, { key: 'date' })"
    >
      <t-picker-item :options="years" />
      <t-picker-item :options="seasons" />
    </t-picker>
  </view>
</template>

<script>
import TCell from '@tdesign/uniapp/cell/cell.vue';
import TPicker from '@tdesign/uniapp/picker/picker.vue';
import TPickerItem from '@tdesign/uniapp/picker-item/picker-item.vue';
import TTag from '@tdesign/uniapp/tag/tag.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TCell,
    TPicker,
    TPickerItem,
    TTag,
  },
  data() {
    return {
      cityText: '',
      cityValue: [],
      dateText: '',
      dateValue: [],

      citys: [
        {
          label: '北京市',
          value: '北京市',
          tag: '合',
        },
        {
          label: '上海市',
          value: '上海市',
          tag: '合',
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

      years: [
        {
          label: '2021年',
          value: '2021',
        },
        {
          label: '2020年',
          value: '2020',
        },
        {
          label: '2019年',
          value: '2019',
        },
      ],

      seasons: [
        {
          label: '春',
          value: '春',
        },
        {
          label: '夏',
          value: '夏',
        },
        {
          label: '秋',
          value: '秋',
        },
        {
          label: '冬',
          value: '冬',
        },
      ],

      formatter(item) {
        const { value, label } = item;
        if (value === '北京市') {
          return {
            value,
            label: label.substring(0, 2),
          };
        }
        return item;
      },

      cityVisible: false,
      dateVisible: false,

      option: {
        tag: '',
      },
    };
  },
  created() {},
  methods: {
    onColumnChange(e, { key }) {
      console.log('picker pick:', { e, key });
    },
    onPickerChange(e, { key }) {
      console.log('picker change:', { e, key });
      const { value } = e;
      this[`${key}Visible`] = false;
      this[`${key}Value`] = value;
      this[`${key}Text`] = value.join(' ');
    },
    onPickerCancel(e, { key }) {
      console.log(e, '取消');
      console.log('picker cancel: ', { e, key });

      this[`${key}Visible`] = false;
    },
    onCityPicker() {
      this.cityVisible = true;
    },
    onSeasonPicker() {
      this.dateVisible = true;
    },
  },
};
</script>
<style>
:deep(.mb-16) {
    margin-bottom: 32rpx;
}

.label-suffix {
    --td-tag-small-height: 32rpx;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12rpx;
}
</style>
