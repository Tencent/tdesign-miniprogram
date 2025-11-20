<template>
  <view>
    <view class="block">
      <t-tag
        :custom-style="mr16"
        variant="light"
      >
        默认
      </t-tag>
      <t-tag
        :custom-style="mr16"
        variant="light"
        theme="primary"
      >
        主要
      </t-tag>
      <t-tag
        :custom-style="mr16"
        variant="light"
        theme="warning"
      >
        警告
      </t-tag>
      <t-tag
        :custom-style="mr16"
        variant="light"
        theme="danger"
      >
        危险
      </t-tag>
      <t-tag
        variant="light"
        theme="success"
      >
        成功
      </t-tag>
    </view>

    <view class="block">
      <t-tag
        :custom-style="mr16"
        theme="default"
      >
        默认
      </t-tag>
      <t-tag
        :custom-style="mr16"
        theme="primary"
      >
        主要
      </t-tag>
      <t-tag
        :custom-style="mr16"
        theme="warning"
      >
        警告
      </t-tag>
      <t-tag
        :custom-style="mr16"
        theme="danger"
      >
        危险
      </t-tag>
      <t-tag
        theme="success"
      >
        成功
      </t-tag>
    </view>

    <view class="block">
      <t-tag
        :custom-style="mr16"
        variant="outline"
      >
        默认
      </t-tag>
      <t-tag
        :custom-style="mr16"
        variant="outline"
        theme="primary"
      >
        主要
      </t-tag>
      <t-tag
        t-class="margin-16"
        :custom-style="mr16"
        variant="outline"
        theme="warning"
      >
        警告
      </t-tag>
      <t-tag
        :custom-style="mr16"
        variant="outline"
        theme="danger"
      >
        危险
      </t-tag>
      <t-tag
        variant="outline"
        theme="success"
      >
        成功
      </t-tag>
    </view>

    <view class="block">
      <t-tag
        :custom-style="mr16"
        variant="light-outline"
      >
        默认
      </t-tag>
      <t-tag
        :custom-style="mr16"
        variant="light-outline"
        theme="primary"
      >
        主要
      </t-tag>
      <t-tag
        :custom-style="mr16"
        variant="light-outline"
        theme="warning"
      >
        警告
      </t-tag>
      <t-tag
        :custom-style="mr16"
        variant="light-outline"
        theme="danger"
      >
        危险
      </t-tag>
      <t-tag
        variant="light-outline"
        theme="success"
      >
        成功
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
      mr16: 'margin-right: 16px;',
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
    margin-top: 48rpx;
}
</style>
