<template>
  <view>
    <t-avatar
      t-class="avatar-example"
      t-class-content="external-class-content"
      aria-label="字符头像"
    >
      A
    </t-avatar>
    <t-avatar
      t-class="avatar-example"
      t-class-content="external-class-content"
      shape="round"
    >
      A
    </t-avatar>
  </view>
</template>

<script>
import TAvatar from 'tdesign-uniapp/avatar/avatar.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TAvatar,
  },
  data() {
    return {
      image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.avatar-example:not(:last-child) {
  margin-right: 64rpx;
}

:deep(.external-class-content) {
  color: #fff;
  background-color: var(--td-brand-color, #0052d9);
  font-weight: 400;
}
</style>
