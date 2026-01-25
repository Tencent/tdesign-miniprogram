<template>
  <view>
    <t-demo-navbar
      custom-class="demo-navbar"
      title="PullDownRefresh"
    />
    <base-comp />
  </view>
</template>

<script>
import BaseComp from '../base';

export default {
  components: {
    BaseComp,
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
