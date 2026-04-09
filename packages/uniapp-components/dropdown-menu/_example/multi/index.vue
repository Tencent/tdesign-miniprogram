<template>
  <view>
    <t-dropdown-menu relation-key="relationKey">
      <t-dropdown-item
        label="单列多选"
        :options="multipleSelect.options"
        :value="multipleSelect.value"
        multiple
        :relation-key="relationKey"
        @change="handleMultipleSelect"
      />
      <t-dropdown-item
        label="双列多选"
        options-columns="2"
        :options="doubleColumnsOptions"
        :default-value="['option_1', 'option_2']"
        multiple
        :relation-key="relationKey"
      />
      <t-dropdown-item
        label="三列多选"
        options-columns="3"
        :options="tripleColumnsOptions"
        :default-value="['option_1', 'option_2', 'option_3']"
        multiple
        :relation-key="relationKey"
      />
    </t-dropdown-menu>
  </view>
</template>

<script>
import TDropdownMenu from '@tdesign/uniapp/dropdown-menu/dropdown-menu.vue';
import TDropdownItem from '@tdesign/uniapp/dropdown-item/dropdown-item.vue';


const chineseNumber = '一二三四五六七八九十'.split('');
const singleSelectOptions = new Array(8).fill(null)
  .map((_, i) => ({
    label: `选项${chineseNumber[i]}`,
    value: `option_${i + 1}`,
    disabled: false,
  }));
singleSelectOptions.push({
  label: '禁用选项',
  value: 'disabled',
  disabled: true,
});
const doubleColumnsOptions = [
  ...singleSelectOptions,
  {
    label: '禁用选项',
    value: 'disabled',
    disabled: true,
  },
];
const tripleColumnsOptions = [
  ...doubleColumnsOptions,
  {
    label: '禁用选项',
    value: 'disabled',
    disabled: true,
  },
];
tripleColumnsOptions.splice(8, 0, {
  label: `选项${chineseNumber[8]}`,
  value: `option_${9}`,
  disabled: false,
});
export default {
  components: {
    TDropdownMenu,
    TDropdownItem,
  },
  data() {
    return {
      multipleSelect: {
        value: ['option_1'],
        options: singleSelectOptions,
      },
      doubleColumnsOptions,
      tripleColumnsOptions,
      relationKey: `${Math.random()}`,
    };
  },
  created() {},
  methods: {
    handleMultipleSelect(e) {
      this.multipleSelect.value = e.value;
    },
  },
};
</script>
<style>
</style>
