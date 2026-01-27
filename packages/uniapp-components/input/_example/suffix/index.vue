<template>
  <view>
    <t-input
      label="标签文字"
      placeholder="请输入文字"
      :suffix-icon="{ name: 'info-circle-filled', ariaLabel: '提示' }"
      @click="click"
    />

    <t-input
      class="extra"
      label="标签文字"
      placeholder="请输入文字"
      tips="最多十个字"
    >
      <template #extra>
        <t-button

          theme="primary"
          :maxcharacter="10"
          size="extra-small"
        >
          操作按钮
        </t-button>
      </template>
    </t-input>

    <t-input
      label="标签文字"
      placeholder="请输入文字"
      :suffix-icon="{ name: 'user-avatar', ariaLabel: '通讯录' }"
    />
  </view>
</template>

<script>
import TButton from 'tdesign-uniapp/button/button.vue';
import TInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    TButton,
    TInput,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    click(e) {
      const { trigger } = e;
      console.log('click: ', trigger);
    },
  },
};
</script>
<style>
.extra {
    --td-input-align-items: start;
}
</style>
