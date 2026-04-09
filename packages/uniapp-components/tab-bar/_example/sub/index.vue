<template>
  <view>
    <t-tab-bar
      t-class="t-tab-bar"
      default-value="user"
      theme="tag"
      :split="false"
      :fixed="false"
    >
      <t-tab-bar-item
        v-for="(item, index) in list"
        :key="index"
        :value="item.value"
        :sub-tab-bar="item.children"
      >
        {{ item.label }}
      </t-tab-bar-item>
    </t-tab-bar>
  </view>
</template>

<script>
import TTabBar from '@tdesign/uniapp/tab-bar/tab-bar.vue';
import TTabBarItem from '@tdesign/uniapp/tab-bar-item/tab-bar-item.vue';
const list = [
  {
    value: 'home',
    label: '首页',
    icon: 'home',
    children: [],
  },
  {
    value: 'app',
    label: '应用',
    icon: 'app',
    children: [],
  },
  {
    value: 'user',
    label: '我的',
    children: [
      {
        value: 'info',
        label: '基本信息',
      },
      {
        value: 'home-page',
        label: '个人主页',
      },
      {
        value: 'setting',
        label: '设置',
      },
    ],
  },
];
export default {
  components: {
    TTabBar,
    TTabBarItem,
  },
  data() {
    return {
      list,
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
</style>
