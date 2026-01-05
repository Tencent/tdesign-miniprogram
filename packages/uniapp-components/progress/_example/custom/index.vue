<template>
  <view>
    <t-progress
      :percentage="88"
      track-color="#EAC9FF"
      color="#CD04FF"
      t-class-label="external-class-label"
    />
    <t-progress
      :percentage="88"
      t-class-bar="external-class-bar"
    />
  </view>
</template>

<script>
import tProgress from 'tdesign-uniapp/progress/progress.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tProgress,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
.external-class-label {
    color: #d504d9;
}

:deep(.external-class-bar) {
    border-radius: 10px !important;
}
</style>
