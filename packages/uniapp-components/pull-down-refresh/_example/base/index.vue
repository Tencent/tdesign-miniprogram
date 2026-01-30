<template>
  <view>
    <t-pull-down-refresh
      :value="enable"
      :loading-texts="['下拉刷新', '松手刷新', '正在刷新', '刷新完成']"
      :using-custom-navbar="!isMPAlipay"
      :success-duration="600"
      @refresh="onRefresh"
      @scroll="onScroll"
      @dragstart="onDragstart"
      @dragging="onDragging"
      @dragend="onDragend"
      @scrolltolower="onScrolltolower"
      @timeout="onTimeout"
    >
      <!-- 包裹页面全部内容 -->
      <view class="demo">
        <t-demo-header
          title="PullDownRefresh 下拉刷新"
          desc="用于快速刷新页面信息，刷新可以是整页刷新也可以是页面的局部刷新。"
          notice="渲染框架支持情况：WebView"
        />
        <view class="pulldown-refresh__content">
          <t-skeleton
            :row-col="rowCol1"
            loading
          />
          <view class="row">
            <t-skeleton
              :row-col="rowCol2"
              loading
            />
            <t-skeleton
              :row-col="rowCol2"
              loading
            />
          </view>
          <view class="row">
            <t-skeleton
              :row-col="rowCol2"
              loading
            />
            <t-skeleton
              :row-col="rowCol2"
              loading
            />
          </view>
          <view class="row">
            <t-skeleton
              :row-col="rowCol2"
              loading
            />
            <t-skeleton
              :row-col="rowCol2"
              loading
            />
          </view>
          <view class="text">
            拖拽该区域演示 顶部下拉刷新
          </view>
        </view>
        <t-back-top
          text="顶部"
          :scroll-top="scrollTop"
          :visibility-height="100"
        />
      </view>
    </t-pull-down-refresh>
  </view>
</template>

<script>
import TPullDownRefresh from '@tdesign/uniapp/pull-down-refresh/pull-down-refresh.vue';
import TSkeleton from '@tdesign/uniapp/skeleton/skeleton.vue';
import TBackTop from '@tdesign/uniapp/back-top/back-top.vue';
export default {
  components: {
    TPullDownRefresh,
    TSkeleton,
    TBackTop,
  },
  data() {
    return {
      enable: false,
      rowCol1: [
        {
          width: '100%',
          height: '342rpx',
          borderRadius: '24rpx',
        },
      ],
      rowCol2: [
        [
          {
            width: '327rpx',
          },
        ],
        [
          {
            width: '200rpx',
          },
        ],
        [
          {
            size: '327rpx',
            borderRadius: '24rpx',
          },
        ],
      ],
      scrollTop: 0,
    };
  },
  mounted() {
    // 处理小程序 ready 生命周期
    this.$nextTick(() => this.ready());
  },
  created() {},
  methods: {
    ready() {
      this.enable = true;
      setTimeout(() => {
        this.enable = false;
      }, 1000);
    },

    onRefresh() {
      this.enable = true;
      setTimeout(() => {
        this.enable = false;
      }, 1500);
    },

    onScroll(e) {
      const { scrollTop } = e;
      this.scrollTop = scrollTop;
    },

    onDragstart(e) {
      console.log('[onDragstart]', e);
    },

    onDragging(e) {
      console.log('[onDragging]', e);
    },

    onDragend(e) {
      console.log('[onDragend]', e);
    },

    onScrolltolower(e) {
      console.log('[onScrolltolower]', e);
    },

    onTimeout(e) {
      console.log('[onTimeout]', e);
    },
  },
};
</script>
<style>
.demo {
    padding-bottom: 56rpx;
    overflow: hidden;
}

.demo-title {
    font-size: 48rpx;
    font-weight: 700;
    line-height: 64rpx;
    margin: 48rpx 32rpx 0;
    color: var(--td-text-color-primary);
}

.demo-desc {
    font-size: 28rpx;
    color: var(--td-text-color-secondary);
    margin: 16rpx 32rpx 0;
    line-height: 44rpx;
}

.pulldown-refresh__content {
    margin: 64rpx 32rpx 0;
    position: relative;
}

.row {
    display: flex;
    justify-content: space-between;
    margin-top: 32rpx;
}

.text {
    position: absolute;
    top: 152rpx;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 32rpx;
    color: var(--td-text-color-disabled);
    width: 686rpx;
}
</style>
