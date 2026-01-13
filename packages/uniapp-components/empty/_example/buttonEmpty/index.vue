<template>
  <view>
    <t-empty
      icon="info-circle-filled"
      description="描述文字"
    >
      <template
        #action
      >
        <t-button
          theme="primary"
          size="large"
        >
          操作按钮
        </t-button>
      </template>
    </t-empty>
  </view>
</template>

<script>
import tEmpty from 'tdesign-uniapp/empty/empty.vue';
import tButton from 'tdesign-uniapp/button/button.vue';


export default {
  components: {
    tEmpty,
    tButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
</style>
