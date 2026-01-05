<template>
  <view>
    <t-navbar
      t-class-placeholder="t-navbar-placeholder"
      t-class-content="t-navbar-content"
      class="custom-navbar"
      left-arrow
      title="标题文字"
    />
  </view>
</template>

<script>
import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
export default {
  components: {
    tNavbar,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
.custom-navbar {
    --td-navbar-color: #fff;
    --td-navbar-bg-color: #0052d9;
}
</style>
