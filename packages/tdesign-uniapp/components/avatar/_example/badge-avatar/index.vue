<template>
  <view>
    <t-avatar
      t-class="avatar-example"
      :image="image"
      :badge-props="{dot: true, offset: [0, 4] }"
    />
    <t-avatar
      t-class="avatar-example"
      t-class-content="external-class-content"
      :badge-props="{count: 8, offset: [-6, 6] }"
    >
      A
    </t-avatar>
    <t-avatar
      t-class="avatar-example"
      icon="user"
      :badge-props="{count: 12, offset: [-6, 6] }"
    />
  </view>
</template>

<script>
import tAvatar from 'tdesign-uniapp/avatar/avatar.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tAvatar,
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
