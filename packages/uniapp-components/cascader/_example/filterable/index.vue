<template>
  <view>
    <t-cell title="地址" :note="note" arrow @click="showCascader" />

    <t-cascader
      :visible="visible"
      :value="value"
      :options="options"
      title="请选择地址"
      filterable
      filter-placeholder="搜索省/市/区"
      @update:visible="(e) => (visible = e)"
      @change="onChange"
      @pick="onPick"
    />
  </view>
</template>

<script>
import TCascader from '@tdesign/uniapp/cascader/cascader.vue';
import TCell from '@tdesign/uniapp/cell/cell.vue';
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
            { value: '110101', label: '东城区' },
            { value: '110102', label: '西城区' },
            { value: '110105', label: '朝阳区' },
            { value: '110106', label: '丰台区' },
            { value: '110107', label: '石景山区' },
            { value: '110108', label: '海淀区' },
            { value: '110109', label: '门头沟区' },
            { value: '110111', label: '房山区' },
            { value: '110112', label: '通州区' },
            { value: '110113', label: '顺义区' },
            { value: '110114', label: '昌平区' },
            { value: '110115', label: '大兴区' },
            { value: '110116', label: '怀柔区' },
            { value: '110117', label: '平谷区' },
            { value: '110118', label: '密云区' },
            { value: '110119', label: '延庆区' },
          ],
        },
      ],
    },
    {
      label: '上海市',
      value: '310000',
      children: [
        {
          value: '310100',
          label: '上海市',
          children: [
            { value: '310101', label: '黄浦区' },
            { value: '310104', label: '徐汇区' },
            { value: '310105', label: '长宁区' },
            { value: '310106', label: '静安区' },
            { value: '310107', label: '普陀区' },
            { value: '310109', label: '虹口区' },
            { value: '310110', label: '杨浦区' },
            { value: '310112', label: '闵行区' },
            { value: '310113', label: '宝山区' },
            { value: '310114', label: '嘉定区' },
            { value: '310115', label: '浦东新区' },
          ],
        },
      ],
    },
    {
      label: '广东省',
      value: '440000',
      children: [
        {
          value: '440100',
          label: '广州市',
          children: [
            { value: '440103', label: '荔湾区' },
            { value: '440104', label: '越秀区' },
            { value: '440105', label: '海珠区' },
            { value: '440106', label: '天河区' },
            { value: '440111', label: '白云区' },
          ],
        },
        {
          value: '440300',
          label: '深圳市',
          children: [
            { value: '440303', label: '罗湖区' },
            { value: '440304', label: '福田区' },
            { value: '440305', label: '南山区' },
            { value: '440306', label: '宝安区' },
            { value: '440307', label: '龙岗区' },
          ],
        },
      ],
    },
  ],
};
export default {
  components: {
    TCell,
    TCascader,
  },
  data() {
    return {
      options: data.areaList,
      note: '请选择地址',
      visible: false,
      value: '',
    };
  },
  methods: {
    showCascader() {
      this.visible = true;
    },
    onPick(e) {
      console.log('pick: ', e);
    },
    onChange(e) {
      const { selectedOptions, value } = e;
      this.value = value;
      this.note = selectedOptions.map((item) => item.label).join('/');
      this.visible = false;
    },
  },
};
</script>
<style></style>
