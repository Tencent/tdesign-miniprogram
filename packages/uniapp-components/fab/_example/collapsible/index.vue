<template>
  <view>
    <t-fab
      :custom-style="scrolling ? 'right: 0;bottom:64px;' : 'right:16px; bottom:24px'"
      @click="handleClick"
      @dragstart="handleDragStart"
      @dragend="handleDragEnd"
    >
      <view
        v-if="!scrolling"
        class="wrap"
      >
        <view class="item">
          <t-icon
            name="add-circle"
            size="20"
          />
          <view class="text">
            添加
          </view>
        </view>
        <view class="item">
          <t-icon
            name="star"
            size="20"
          />
          <view class="text">
            收藏
          </view>
        </view>
        <view class="item">
          <t-icon
            name="jump"
            size="20"
          />
          <view class="text">
            分享
          </view>
        </view>
      </view>
      <view
        v-else
        class="symbol"
      >
        <t-icon
          name="chevron-left"
          size="20"
        />
      </view>
    </t-fab>
  </view>
</template>

<script>
import TFab from 'tdesign-uniapp/fab/fab.vue';
import TIcon from 'tdesign-uniapp/icon/icon.vue';
import pageScrollMixin from 'tdesign-uniapp/mixins/page-scroll';


export default {
  components: {
    TFab,
    TIcon,
  },
  mixins: [pageScrollMixin()],
  data() {
    return {
      scrolling: false,
      timer: null,
    };
  },
  methods: {
    handleClick(e) {
      console.log('handleClick: ', e);
    },
    handleDragStart(e) {
      console.log('handleDragStart: ', e);
    },
    handleDragEnd(e) {
      console.log('handleDragEnd: ', e);
    },
    onScroll() {
      clearTimeout(this.timer);
      this.scrolling = true,
      this.timer = setTimeout(() => {
        this.scrolling = false;
      }, 100);
    },
  },
};
</script>
<style>
.wrap {
    border: 1px solid #dcdcdc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 8px 0;
    border-radius: 22px;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.1), 0px 8px 10px 1px rgba(0, 0, 0, 0.06), 0px 3px 14px 2px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 1);
    width: 44px;
    height: 156px;
    box-sizing: border-box;
}

.item {
    width: 100%;
    height: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
}

.item:not(:last-child) {
    margin-bottom: 4px;
}

.text {
    height: 20px;
    line-height: 20px;
}

.symbol {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px 0 0 16px;
    background: #fff;

    border: 1px solid #dcdcdc;
    border-right: 0;
    box-shadow: 0px 5px 5px -3px #0000001a, 0px 8px 10px 1px #0000000f, 0px 3px 14px 2px #0000000d;
}
</style>
