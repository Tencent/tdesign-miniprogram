<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="PullDownRefresh"
    />
    <baseComp />
  </view>
</template>

<script>
import TNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseComp from '../base';
export default {
  components: {
    TNavbar,
    baseComp,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
@import './pull-down-refresh.css';
</style>
