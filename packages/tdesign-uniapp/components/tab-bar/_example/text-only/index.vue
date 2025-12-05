<template>
  <view>
    <t-tab-bar
      t-class="t-tab-bar"
      :value="value"
      theme="tag"
      :split="false"
      @change="onChange"
    >
      <t-tab-bar-item
        v-for="(item, index) in list"
        :key="index"
        :value="item.value"
      >
        {{ item.label }}
      </t-tab-bar-item>
    </t-tab-bar>
  </view>
</template>

<script>
import tTabBar from 'tdesign-uniapp/tab-bar/tab-bar.vue';
import tTabBarItem from 'tdesign-uniapp/tab-bar-item/tab-bar-item.vue';
export default {
  components: {
    tTabBar,
    tTabBarItem,
  },
  data() {
    return {
      value: 'home',
      list: [
        {
          value: 'home',
          label: '首页',
        },
        {
          value: 'app',
          label: '应用',
        },
        {
          value: 'chat',
          label: '聊天',
        },
        {
          value: 'user',
          label: '我的',
        },
      ],
    };
  },
  created() {},
  methods: {
    onChange(e) {
      this.value = e.value;
    },
  },
};
</script>
<style>
</style>
