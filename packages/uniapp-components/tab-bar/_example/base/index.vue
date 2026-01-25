<template>
  <view>
    <t-tab-bar
      t-class="t-tab-bar"
      :value="value"
      theme="tag"
      :fixed="false"
      :split="false"
      @change="onChange"
    >
      <t-tab-bar-item
        v-for="(item, index) in list"
        :key="index"
        :value="item.value"
        :icon="item.icon"
      >
        {{ item.label }}
      </t-tab-bar-item>
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
          label: '首页',
          icon: 'home',
        },
        {
          value: 'label_2',
          label: '应用',
          icon: 'app',
        },
        {
          value: 'label_3',
          label: '聊天',
          icon: 'chat',
        },
        {
          value: 'label_4',
          label: '我的',
          icon: 'user',
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
