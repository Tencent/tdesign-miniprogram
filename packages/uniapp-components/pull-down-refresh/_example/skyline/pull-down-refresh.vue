<template>
  <view>
    <t-demo-navbar
      class="demo-navbar"
      title="PullDownRefresh"
    />
    <baseComp />
  </view>
</template>

<script>
import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import baseComp from '../base';
export default {
  components: {
    tNavbar,
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
