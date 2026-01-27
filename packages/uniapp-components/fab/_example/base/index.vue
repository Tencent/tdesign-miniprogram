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
import TFab from '@tdesign/uniapp/fab/fab.vue';
export default {
  components: {
    TFab,
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
