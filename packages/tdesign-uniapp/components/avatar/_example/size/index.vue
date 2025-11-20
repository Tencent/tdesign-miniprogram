<template>
  <view>
    <view class="avatar-example">
      <t-avatar
        t-class="avatar-example--large"
        :image="image"
        size="large"
      />
      <t-avatar
        t-class="avatar-example--large"
        t-class-content="external-class-content"
        size="large"
      >
        A
      </t-avatar>
      <t-avatar
        t-class="avatar-example--large"
        icon="user"
        size="large"
      />
    </view>

    <view class="avatar-example">
      <t-avatar
        t-class="avatar-example--medium"
        :image="image"
      />
      <t-avatar
        t-class="avatar-example--medium"
        t-class-content="external-class-content"
        size="medium"
      >
        A
      </t-avatar>
      <t-avatar
        t-class="avatar-example--medium"
        icon="user"
        size="medium"
      />
    </view>

    <view class="avatar-example">
      <t-avatar
        t-class="avatar-example--small"
        :image="image"
        size="small"
      />
      <t-avatar
        t-class="avatar-example--small"
        t-class-content="external-class-content"
        size="small"
      >
        A
      </t-avatar>
      <t-avatar
        t-class="avatar-example--small"
        icon="user"
        size="small"
      />
    </view>
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
.avatar-example {
    display: flex;
    margin-bottom: 32rpx;
}

:deep(.external-class-content) {
    color: #fff;
    background-color: var(--td-brand-color, #0052d9);
    font-weight: 400;
}

.avatar-example--small:not(:last-child) {
    margin-right: 112rpx;
}

.avatar-example--medium:not(:last-child) {
    margin-right: 96rpx;
}

.avatar-example--large:not(:last-child) {
    margin-right: 64rpx;
}
</style>
