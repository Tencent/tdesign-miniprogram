<template>
  <view>
    <t-avatar-group
      :max="5"
      collapse-avatar="+5"
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
  methods: {},
};
</script>
<style>
</style>
