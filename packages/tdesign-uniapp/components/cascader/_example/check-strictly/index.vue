<template>
  <view>
    <t-cell
      title="地址"
      :note="note"
      arrow
      @click="showCascader"
    />

    <t-cascader
      v-model:visible="visible"
      :close-btn="false"
      :check-strictly="true"
      :value="value"
      :options="options"
      title="请选择地址"
      @change="onChange"
      @pick="onPick"
    >
      <template
        #close-btn
      >
        <text
          class="confirm-btn"
        >
          确定
        </text>
      </template>
    </t-cascader>
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell.vue';
import tCascader from 'tdesign-uniapp/cascader/cascader.vue';
const data = {
  areaList: [
    {
      label: '北京市',
      value: '110000',
      children: [
        {
          value: '110100',
          label: '北京市',
          children: [
            {
              value: '110101',
              label: '东城区',
            },
            {
              value: '110102',
              label: '西城区',
            },
            {
              value: '110105',
              label: '朝阳区',
            },
            {
              value: '110106',
              label: '丰台区',
            },
            {
              value: '110107',
              label: '石景山区',
            },
            {
              value: '110108',
              label: '海淀区',
            },
            {
              value: '110109',
              label: '门头沟区',
            },
            {
              value: '110111',
              label: '房山区',
            },
            {
              value: '110112',
              label: '通州区',
            },
            {
              value: '110113',
              label: '顺义区',
            },
            {
              value: '110114',
              label: '昌平区',
            },
            {
              value: '110115',
              label: '大兴区',
            },
            {
              value: '110116',
              label: '怀柔区',
            },
            {
              value: '110117',
              label: '平谷区',
            },
            {
              value: '110118',
              label: '密云区',
            },
            {
              value: '110119',
              label: '延庆区',
            },
          ],
        },
      ],
    },
    {
      label: '天津市',
      value: '120000',
      children: [
        {
          value: '120100',
          label: '天津市',
          children: [
            {
              value: '120101',
              label: '和平区',
            },
            {
              value: '120102',
              label: '河东区',
            },
            {
              value: '120103',
              label: '河西区',
            },
            {
              value: '120104',
              label: '南开区',
            },
            {
              value: '120105',
              label: '河北区',
            },
            {
              value: '120106',
              label: '红桥区',
            },
            {
              value: '120110',
              label: '东丽区',
            },
            {
              value: '120111',
              label: '西青区',
            },
            {
              value: '120112',
              label: '津南区',
            },
            {
              value: '120113',
              label: '北辰区',
            },
            {
              value: '120114',
              label: '武清区',
            },
            {
              value: '120115',
              label: '宝坻区',
            },
            {
              value: '120116',
              label: '滨海新区',
            },
            {
              value: '120117',
              label: '宁河区',
            },
            {
              value: '120118',
              label: '静海区',
            },
            {
              value: '120119',
              label: '蓟州区',
            },
          ],
        },
      ],
    },
  ],
};
export default {
  components: {
    tCell,
    tCascader,
  },
  data() {
    return {
      options: data.areaList,
      note: '请选择地址',
      visible: false,
      value: '',
    };
  },
  created() {},
  methods: {
    showCascader() {
      this.visible = true;
    },
    onPick(e) {
      console.log(e);
    },
    onChange(e) {
      const { selectedOptions, value } = e;
      console.log('change', value);
      this.value = value;
      this.note = selectedOptions.map(item => item.label).join('/');
      this.visible = false;
    },
  },
};
</script>
<style>
.confirm-btn {
    color: #0052d9;
    font-size: 16px;
}
</style>
