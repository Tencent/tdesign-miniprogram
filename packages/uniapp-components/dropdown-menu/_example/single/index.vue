<template>
  <view>
    <t-dropdown-menu relation-key="relationKey">
      <t-dropdown-item
        :options="product.options"
        placement="right"
        :value="product.value"
        :relation-key="relationKey"
        @change="onChange"
      />
      <t-dropdown-item
        :options="sorter.options"
        placement="right"
        :default-value="sorter.value"
        :relation-key="relationKey"
      />
    </t-dropdown-menu>
  </view>
</template>

<script>
import TDropdownMenu from '@tdesign/uniapp/dropdown-menu/dropdown-menu.vue';
import TDropdownItem from '@tdesign/uniapp/dropdown-item/dropdown-item.vue';


export default {
  components: {
    TDropdownMenu,
    TDropdownItem,
  },
  data() {
    return {
      product: {
        value: 'all',
        options: [
          {
            value: 'all',
            label: '全部产品',
          },
          {
            value: 'new',
            label: '最新产品',
          },
          {
            value: 'hot',
            label: '最火产品',
          },
          {
            value: 'disabled',
            label: '禁用选项',
            disabled: true,
          },
        ],
      },
      sorter: {
        value: 'default',
        options: [
          {
            value: 'default',
            label: '默认排序',
          },
          {
            value: 'price',
            label: '价格从高到低',
          },
        ],
      },
      relationKey: `${Math.random()}`,
    };
  },
  created() {},
  methods: {
    onChange(e) {
      this.product.value = e.value;
    },
  },
};
</script>
<style>
</style>
