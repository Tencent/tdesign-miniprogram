<template>
  <view>
    <t-swipe-cell
      :right="right"
      :left="left"
      @click="onActionClick"
    >
      <t-cell
        title="左右滑操作"
        note="辅助信息"
        :bordered="false"
      />
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
    return {
      right: [
        {
          text: '删除',
          className: 'btn delete-btn',
        },
      ],
      left: [
        {
          text: '选择',
          className: 'btn favor-btn',
        },
      ],
    };
  },
  created() {},
  methods: {
    onActionClick(detail) {
      uni.showToast({
        title: `你点击了${detail.text}`,
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

.delete-btn {
    background-color: #e34d59;
}
</style>
