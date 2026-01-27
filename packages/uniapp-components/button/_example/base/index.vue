<template>
  <view>
    <view class="button-example">
      <t-button
        theme="primary"
        size="large"
        custom-style="margin-right: 16px;"
      >
        填充按钮
      </t-button>
      <t-button
        theme="light"
        size="large"
        custom-style="margin-right: 16px;"
      >
        填充按钮
      </t-button>
      <t-button size="large">
        填充按钮
      </t-button>
    </view>

    <view class="button-example">
      <t-button
        theme="primary"
        size="large"
        variant="outline"
        custom-style="margin-right: 16px;"
      >
        描边按钮
      </t-button>
      <t-button
        theme="primary"
        size="large"
        custom-style="margin-right: 16px;"
        variant="dashed"
      >
        虚框按钮
      </t-button>
      <t-button
        theme="primary"
        size="large"
        variant="text"
      >
        文字按钮
      </t-button>
    </view>
  </view>
</template>

<script>
import TButton from '@tdesign/uniapp/button/button.vue';


export default {
  components: {
    TButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
.button-example {
    margin: 16px;
    display: flex;
    justify-content: space-between;
}

.button-example:after {
    content: '';
    flex: auto;
}
</style>
