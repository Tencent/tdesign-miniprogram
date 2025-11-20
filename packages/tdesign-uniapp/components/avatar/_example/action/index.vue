<template>
  <view>
    <t-avatar-group
      cascading="right-up"
      :max="5"
      @collapsed-item-click="onClickCollapsedAvatar"
    >
      <t-avatar
        v-for="(pic, index) in pics"
        :key="index"
        :image="pic"
      />
    </t-avatar-group>
  </view>
</template>

<script>
import tAvatar from 'tdesign-uniapp/avatar/avatar.vue';
import tAvatarGroup from 'tdesign-uniapp/avatar-group/avatar-group.vue';
export default {
  components: {
    tAvatar,
    tAvatarGroup,
  },
  data() {
    return {
      pics: [
        'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar2.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar3.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar4.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar5.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      ],
      pic: '',
    };
  },
  created() {},
  methods: {
    onAddTap() {
      uni.showToast({
        title: '您按下了添加',
        icon: 'none',
        duration: 1000,
      });
    },
    onClickCollapsedAvatar() {
      console.log('click collapsed avatar');
    },
  },
};
</script>
<style>
</style>
