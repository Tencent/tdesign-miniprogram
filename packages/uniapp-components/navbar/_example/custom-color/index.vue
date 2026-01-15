<template>
  <view>
    <t-navbar
      t-class-placeholder="t-navbar-placeholder"
      t-class-content="t-navbar-content"
      t-class="custom-navbar"
      left-arrow
      title="标题文字"
      @right-click="handleRightClick"
    >
      <template #right>
        <div>右侧内容</div>
      </template>
    </t-navbar>
  </view>
</template>

<script>
import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';


export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tNavbar,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleRightClick() {
      console.log('right click');
    },
  },
};
</script>
<style>
.custom-navbar {
    --td-navbar-color: #fff;
    --td-navbar-bg-color: #0052d9;
}
</style>
