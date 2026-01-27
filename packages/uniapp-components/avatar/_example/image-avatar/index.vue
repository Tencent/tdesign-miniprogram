<template>
  <view>
    <t-avatar
      t-class="avatar-example"
      :image="image"
    />
    <t-avatar
      t-class="avatar-example"
      shape="round"
      :image="image"
    />
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
:deep(.avatar-example) {
    margin-right: 64rpx;
}
</style>
