<template>
  <view>
    <t-tab-bar
      t-class="t-tab-bar"
      :value="value"
      shape="round"
      theme="tag"
      :split="false"
      :fixed="false"
      @change="onChange"
    >
      <t-tab-bar-item
        v-for="(item, index) in list"
        :key="index"
        :value="item.value"
        :icon="item.icon"
        :aria-label="item.ariaLabel"
      />
    </t-tab-bar>
  </view>
</template>

<script>
import TTabBar from 'tdesign-uniapp/tab-bar/tab-bar.vue';
import TTabBarItem from 'tdesign-uniapp/tab-bar-item/tab-bar-item.vue';
export default {
  components: {
    TTabBar,
    TTabBarItem,
  },
  data() {
    return {
      value: 'label_1',
      list: [
        {
          value: 'label_1',
          icon: 'home',
          ariaLabel: '首页',
        },
        {
          value: 'label_2',
          icon: 'app',
          ariaLabel: '软件',
        },
        {
          value: 'label_3',
          icon: 'chat',
          ariaLabel: '聊天',
        },
        {
          value: 'label_4',
          icon: 'user',
          ariaLabel: '我的',
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
