<template>
  <view>
    <t-swipe-cell
      :right="right"
      opened
      @click="onActionClick"
    >
      <t-cell
        title="左滑-带图标文本双操作"
        note="辅助信息"
        :bordered="false"
      />
    </t-swipe-cell>

    <t-swipe-cell :right="rightIcon">
      <t-cell
        title="左滑-仅带图标双操作"
        note="辅助信息"
        :bordered="false"
      />
    </t-swipe-cell>

    <t-swipe-cell>
      <t-cell
        :bordered="false"
        title="左滑大列表-仅带图标双操作"
        description="一段很长很长的内容文字"
        note="辅助信息"
        image="https://tdesign.gtimg.com/mobile/demos/avatar1.png"
      />
      <template
        #right
      >
        <view
          class="btn-wrapper"
        >
          <view
            class="btn edit-btn column"
            @click="onEdit"
          >
            <t-icon
              t-class="padding-bottom"
              name="edit"
              size="32rpx"
            />
            编辑
          </view>
          <view
            class="btn delete-btn column"
            @click="onDelete"
          >
            <t-icon
              t-class="padding-bottom"
              name="delete"
              size="32rpx"
            />
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
import tIcon from 'tdesign-uniapp/icon/icon.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tSwipeCell,
    tCell,
    tIcon,
  },
  data() {
    return {
      right: [
        {
          text: '编辑',
          icon: {
            name: 'edit',
            size: 16,
          },
          className: 'btn edit-btn',
        },
        {
          text: '删除',
          icon: {
            name: 'delete',
            size: 16,
          },
          className: 'btn delete-btn',
        },
      ],
      rightIcon: [
        {
          icon: 'edit',
          className: 'btn edit-btn',
        },
        {
          icon: 'delete',
          className: 'btn delete-btn',
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

.column {
    flex-direction: column;
}

.padding-bottom {
    padding-bottom: 8rpx;
}
</style>
