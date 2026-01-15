<template>
  <view>
    <view class="block">
      <t-tag
        :custom-style="mr16V"
        size="extra-large"
        variant="light"
      >
        加大尺寸
      </t-tag>
      <t-tag
        :custom-style="mr16V"
        size="large"
        variant="light"
      >
        大尺寸
      </t-tag>
      <t-tag
        :custom-style="mr16V"
        size="medium"
        variant="light"
      >
        中尺寸
      </t-tag>
      <t-tag
        custom-style="vertical-align: top;"
        size="small"
        variant="light"
      >
        小尺寸
      </t-tag>
    </view>

    <view class="block">
      <t-tag
        :custom-style="mr8V"
        size="extra-large"
        variant="light"
        closable
      >
        加大尺寸
      </t-tag>
      <t-tag
        :custom-style="mr8V"
        size="large"
        variant="light"
        closable
      >
        大尺寸
      </t-tag>
      <t-tag
        :custom-style="mr8V"
        size="medium"
        variant="light"
        closable
      >
        中尺寸
      </t-tag>
      <t-tag
        size="small"
        variant="light"
        closable
        custom-style="vertical-align: top;"
      >
        小尺寸
      </t-tag>
    </view>
  </view>
</template>

<script>
import tTag from 'tdesign-uniapp/tag/tag.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tTag,
  },
  data() {
    return {
      mr16V: 'margin-right: 16px;vertical-align: top;',
      mr8V: 'margin-right: 8px;vertical-align: top;',
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.block {
    margin: 0 32rpx;
}

.block + .block {
    margin-top: 32rpx;
}
</style>
