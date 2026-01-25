<template>
  <view>
    <view class="tr">
      <view class="col">
        <view class="text">
          裁切
        </view>
        <t-image
          :src="imageSrc"
          mode="aspectFill"
          width="72"
          height="72"
          aria-label="一个放置在墙角的黄色行李箱"
        />
      </view>
      <view class="col">
        <view class="text">
          适应高
        </view>
        <t-image
          :src="imageSrc"
          mode="heightFix"
          width="72"
          height="72"
          aria-label="一个放置在墙角的黄色行李箱"
        />
      </view>
      <view class="col">
        <view class="text">
          拉伸
        </view>
        <t-image
          :src="imageSrc"
          width="72"
          height="72"
          aria-label="一个放置在墙角的黄色行李箱"
        />
      </view>
    </view>

    <view class="tr">
      <view class="col">
        <view class="text">
          方形
        </view>
        <t-image
          :src="imageSrc"
          mode="aspectFill"
          width="72"
          height="72"
          aria-label="一个放置在墙角的黄色行李箱"
        />
      </view>
      <view class="col">
        <view class="text">
          圆角方形
        </view>
        <t-image
          :src="imageSrc"
          width="72"
          height="72"
          shape="round"
          aria-label="一个放置在墙角的黄色行李箱"
        />
      </view>
      <view class="col">
        <view class="text">
          圆形
        </view>
        <t-image
          :src="imageSrc"
          width="72"
          height="72"
          shape="circle"
          aria-label="一个放置在墙角的黄色行李箱"
        />
      </view>
    </view>
  </view>
</template>

<script>
import TImage from 'tdesign-uniapp/image/image.vue';
export default {
  components: {
    TImage,
  },
  data() {
    return {
      imageSrc: 'https://tdesign.gtimg.com/mobile/demos/image1.jpeg',
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.tr {
    display: flex;
}

.col {
    margin: 0 32rpx;
    flex: 1;
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
</style>
