<template>
  <view>
    <view class="tr">
      <view class="col">
        <view class="text">
          加载默认提示
        </view>
        <t-image
          ref="loading-img"
          shape="round"
          width="72"
          height="72"
        />
      </view>
      <view class="col">
        <view class="text">
          加载自定义提示
        </view>
        <t-image
          ref="loading-img-custom"
          shape="round"
          loading="slot"
          width="72"
          height="72"
        >
          <template #loading>
            <t-loading
              theme="spinner"
              size="40rpx"
              loading
            />
          </template>
        </t-image>
      </view>
    </view>

    <view class="tr">
      <view class="col">
        <view class="text">
          失败默认提示
        </view>
        <t-image
          id="loading-img"
          shape="round"
          src="a"
          width="72"
          height="72"
        />
      </view>
      <view class="col">
        <view class="text">
          失败自定义提示
        </view>
        <t-image
          src="a"
          shape="round"
          error="slot"
          width="72"
          height="72"
        >
          <template #error>
            <text
              class="error-text"
            >
              加载失败
            </text>
          </template>
        </t-image>
      </view>
    </view>
  </view>
</template>

<script>
import tImage from 'tdesign-uniapp/image/image.vue';
import tLoading from 'tdesign-uniapp/loading/loading.vue';
export default {
  components: {
    tImage,
    tLoading,
  },
  data() {
    return {
      isLoading: false,
      isFailed: false,
    };
  },
  pageLifetimes: {
    show() {
      this.handlePageShow();
    },
  },
  created() {},
  methods: {
    handlePageShow() {
      const $ele1 = this.$refs['#loading-img'];
      const $ele2 = this.$refs['#loading-img-custom'];
      this.setLoadingStatus($ele1);
      this.setLoadingStatus($ele2);
    },

    setLoadingStatus(ele) {
      ele.onLoadError = null;
      ele.onLoaded = null;

      ele.isLoading = true;
      ele.isFailed = false;
    },
  },
};
</script>
<style>
.tr {
    display: flex;
}

.col {
    margin: 0 32rpx;
}

.tr + .tr {
    margin-top: 48rpx;
}

.text {
    font-size: 28rpx;
    color: var(--td-text-color-secondary);
    line-height: 44rpx;
    margin-bottom: 32rpx;
}

.error-text {
    font-size: 20rpx;
    font-weight: 400;
}
</style>
