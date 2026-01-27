<template>
  <view>
    <t-notice-bar
      :visible="visible"
      suffix-icon="chevron-right"
      @click="click"
    >
      <template
        #content
      >
        <view
          class="inline"
        >
          这是一条普通的通知信息
        </view>
      </template>
      <template
        #operation
      >
        <t-link
          content="详情"
          theme="primary"
          :underline="false"
          :navigator-props="navigatorProps"
        />
      </template>
    </t-notice-bar>

    <t-notice-bar
      :visible="visible"
      suffix-icon="chevron-right"
      content="这是一条普通的通知信息"
      @click="click"
    />
  </view>
</template>

<script>
import TNoticeBar from '@tdesign/uniapp/notice-bar/notice-bar.vue';
import TLink from '@tdesign/uniapp/link/link.vue';
export default {
  components: {
    TNoticeBar,
    TLink,
  },
  data() {
    return {
      visible: true,
      navigatorProps: {
        url: '/pages/home/home',
      },
    };
  },
  created() {},
  methods: {
    click(e) {
      const { trigger } = e;
      console.log(`click on the ${trigger} area`);
    },
  },
};
</script>
<style>
.inline {
    display: inline;
}
</style>
