<template>
  <view>
    <t-dropdown-menu>
      <t-dropdown-item
        label="树形双列"
        options-layout="tree"
        :options="doubleColumnsTree.options"
        :value="doubleColumnsTree.value"
        @change="handleTreeSelect"
      />
      <t-dropdown-item
        label="选项最多八字树形三列"
        options-layout="tree"
        :options="tripleColumnsTree.options"
        :default-value="tripleColumnsTree.value"
        multiple
      />
    </t-dropdown-menu>
  </view>
</template>

<script>
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
      rect.options = generateTree(deep - 1, 10, value);
    }
    ans.push(rect);
  }
  return ans;
};
export default {
  components: {
  },
  data() {
    return {
      doubleColumnsTree: {
        options: generateTree(1),
        value: ['0', '0-0'],
      },
      tripleColumnsTree: {
        options: generateTree(2),
        value: ['0', '0-0', ['0-0-0', '0-0-1']],
      },
    };
  },
  created() {},
  methods: {
    handleTreeSelect(e) {
      this.doubleColumnsTree.value = e.value;
    },
  },
};
</script>
<style>
</style>
