<template>
  <view>
    <t-swipe-cell>
      <t-cell
        title="左滑单操作"
        note="辅助信息"
        :bordered="false"
      />
      <template #right>
        <view
          class="btn delete-btn"
          @click="onDelete"
        >
          删除
        </view>
      </template>
    </t-swipe-cell>

    <t-swipe-cell>
      <t-cell
        :bordered="false"
        title="左滑大列表"
        description="一段很长很长的内容文字"
        note="辅助信息"
        image="https://tdesign.gtimg.com/mobile/demos/avatar1.png"
      />
      <template #right>
        <view
          class="btn delete-btn"
          @click="onDelete"
        >
          删除
        </view>
      </template>
    </t-swipe-cell>

    <t-swipe-cell
      :right="right"
      @click="onActionClick"
    >
      <t-cell
        title="左滑双操作"
        note="辅助信息"
        :bordered="false"
      />
    </t-swipe-cell>

    <t-swipe-cell>
      <t-cell
        title="左滑多操作"
        note="辅助信息"
        :bordered="false"
      />
      <template #right>
        <view
          class="btn-wrapper"
        >
          <view
            class="btn favor-btn"
            @click="onFavor"
          >
            收藏
          </view>
          <view
            class="btn edit-btn"
            @click="onEdit"
          >
            编辑
          </view>
          <view
            class="btn delete-btn"
            @click="onDelete"
          >
            删除
          </view>
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
    return {
      right: [
        {
          text: '编辑',
          className: 'btn edit-btn',
        },
        {
          text: '删除',
          className: 'btn delete-btn',
        },
      ],
    };
  },
  created() {},
  methods: {
    onActionClick(action) {
      uni.showToast({
        title: `你点击了${action.text}`,
        icon: 'none',
      });
    },
    onDelete() {
      uni.showToast({
        title: '你点击了删除',
        icon: 'none',
      });
    },
    onEdit() {
      uni.showToast({
        title: '你点击了编辑',
        icon: 'none',
      });
    },
    onFavor() {
      uni.showToast({
        title: '你点击了收藏',
        icon: 'none',
      });
    },
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
.btn-wrapper {
    height: 100%;
}

.btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 120rpx;
    height: 100%;
    color: white;
}

.delete-btn {
    background-color: #e34d59;
}

.edit-btn {
    background-color: #ed7b2f;
}

.favor-btn {
    background-color: var(--td-brand-color, #0052d9);
}
</style>
