<template>
  <view>
    <t-tree-select
      :options="options"
      :value="value"
      @change="onChange"
    />
  </view>
</template>

<script>
import tTreeSelect from 'tdesign-uniapp/tree-select/tree-select.vue';
const chineseNumber = '一二三四五六七八九十'.split('');
const generateTree = function (deep = 0, count = 10, prefix) {
  const ans = [];
  for (let i = 0; i < count; i += 1) {
    const value = prefix ? `${prefix}-${i}` : `${i}`;
    const rect = {
      label: `选项${chineseNumber[i]}`,
      value,
    };
    if (deep > 0) {
      rect.children = generateTree(deep - 1, 10, value);
    }
    ans.push(rect);
  }
  return ans;
};
export default {
  components: {
    tTreeSelect,
  },
  data() {
    return {
      options: generateTree(1),
      value: ['5', '5-5'],
    };
  },
  created() {},
  methods: {
    onChange(e) {
      console.log('change: ', e);
      this.value = e.value;
    },
  },
};
</script>
<style>
</style>
