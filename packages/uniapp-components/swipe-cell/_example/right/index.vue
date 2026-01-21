<template>
  <view>
    <t-swipe-cell>
      <t-cell
        title="右滑单操作"
        note="辅助信息"
        :bordered="false"
      />
      <template
        #left
      >
        <view
          class="btn favor-btn"
          @click="onChoice"
        >
          选择
        </view>
      </template>
    </t-swipe-cell>
  </view>
</template>

<script>
import tSwipeCell from 'tdesign-uniapp/swipe-cell/swipe-cell.vue';
import tCell from 'tdesign-uniapp/cell/cell.vue';
export default {
  components: {
    tSwipeCell,
    tCell,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onChoice() {
      uni.showToast({
        title: '你点击了选择',
        icon: 'none',
      });
    },
  },
};
</script>
<style>
.btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 120rpx;
    height: 100%;
    color: white;
}

.favor-btn {
    background-color: var(--td-brand-color, #0052d9);
}
</style>
