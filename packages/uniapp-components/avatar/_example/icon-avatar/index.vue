<template>
  <view>
    <t-avatar
      t-class="avatar-example"
      icon="user"
    />
    <t-avatar
      t-class="avatar-example"
      shape="round"
      icon="user"
    />
  </view>
</template>

<script>
import TAvatar from '@tdesign/uniapp/avatar/avatar.vue';
export default {
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
</style>
