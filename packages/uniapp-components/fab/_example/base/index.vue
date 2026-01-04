<template>
  <view>
    <t-fab
      icon="add"
      aria-label="增加"
      @click="handleClick"
    />
  </view>
</template>

<script>
import tFab from 'tdesign-uniapp/fab/fab.vue';
export default {
  components: {
    tFab,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>
