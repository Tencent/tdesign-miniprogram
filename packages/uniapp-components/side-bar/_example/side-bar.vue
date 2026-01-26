<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="SideBar"
    />

    <t-demo-header
      title="SideBar 侧边栏"
      desc="用于信息分类后的展示切换或锚点，位于页面左侧。"
      notice="渲染框架支持情况：WebView"
    />
    <t-demo
      title="01 组件类型"
      desc="侧边导航用法"
      padding
    >
      <t-button
        variant="outline"
        theme="primary"
        size="large"
        block
        data-target="base"
        @click="toNavigation($event, { target: 'base' })"
      >
        锚点用法
      </t-button>

      <t-button
        variant="outline"
        theme="primary"
        size="large"
        block
        data-target="switch"
        @click="toNavigation($event, { target: 'switch' })"
      >
        切页用法
      </t-button>
    </t-demo>

    <t-demo
      desc="带图标侧边导航"
      padding
    >
      <t-button
        variant="outline"
        theme="primary"
        size="large"
        block
        data-target="with-icon"
        @click="toNavigation($event, { target: 'with-icon' })"
      >
        带图标侧边导航
      </t-button>
    </t-demo>

    <t-demo
      title="02 组件样式"
      desc="侧边导航样式"
      padding
    >
      <t-button
        variant="outline"
        theme="primary"
        size="large"
        block
        data-target="custom"
        @click="toNavigation($event, { target: 'custom' })"
      >
        自定义样式
      </t-button>
    </t-demo>
  </view>
</template>

<script>
import TButton from 'tdesign-uniapp/button/button.vue';

export default {
  components: {
    TButton,
  },
  data() {
    return {};
  },
  methods: {
    toNavigation(e, { target }) {
      uni.navigateTo({
        url: `./${target}/index`,
      });
    },
  },
};
</script>
<style lang="less">
@import './side-bar.less';
</style>
