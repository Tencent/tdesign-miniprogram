<template>
  <view>
    <view class="demo">
      <view class="tag-demo-desc">
        基础标签
      </view>

      <t-tag
        :custom-style="mr16"
        variant="light"
      >
        标签文字
      </t-tag>
      <t-tag
        :custom-style="mr16"
        variant="outline"
      >
        标签文字
      </t-tag>
    </view>

    <view class="demo">
      <view class="tag-demo-desc">
        圆弧标签
      </view>

      <t-tag
        :custom-style="mr16"
        variant="light"
        shape="round"
      >
        标签文字
      </t-tag>
      <t-tag
        :custom-style="mr16"
        variant="outline"
        shape="round"
      >
        标签文字
      </t-tag>
      <t-tag
        variant="outline"
        shape="mark"
      >
        标签文字
      </t-tag>
    </view>

    <view class="demo">
      <view class="tag-demo-desc">
        带图标的标签
      </view>

      <t-tag
        :custom-style="mr16"
        variant="light"
        icon="discount"
      >
        标签文字
      </t-tag>
      <t-tag
        variant="outline"
        icon="discount"
      >
        标签文字
      </t-tag>
    </view>

    <!-- skyline暂不支持设置后max-width超出省略 -->
    <view
      v-if="!skylineRender"
      class="demo"
    >
      <view class="tag-demo-desc">
        超长省略文本标签
      </view>

      <t-tag
        :max-width="130"
        variant="light"
      >
        超长省略文本标签超长省略文本标签
      </t-tag>
    </view>
  </view>
</template>

<script>
import tTag from 'tdesign-uniapp/tag/tag.vue';
import SkylineBehavior from 'tdesign-uniapp/mixins/skyline.js';

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tTag,
  },
  mixins: [SkylineBehavior],
  data() {
    return {
      mr16: 'margin-right: 16px;',
    };
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
.demo {
    padding: 0 32rpx 48rpx;
}

.demo:last-child {
    padding-bottom: 0;
}

.tag-demo-desc {
    font-size: 14px;
    color: var(--td-text-color-secondary);
    margin-bottom: 32rpx;
}
</style>
