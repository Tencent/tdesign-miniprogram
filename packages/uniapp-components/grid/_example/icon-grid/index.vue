<template>
  <view class="block">
    <t-grid>
      <t-grid-item
        text="分享"
        image="slot"
      >
        <template
          #image
        >
          <view
            class="grid-item__image"
          >
            <t-button
              variant="text"
              icon="share"
              open-type="share"
            />
          </view>
        </template>
      </t-grid-item>
      <t-grid-item
        text="收藏"
        icon="star"
        @click="onClick"
      />
      <t-grid-item
        text="保存"
        icon="download"
        @click="onClick"
      />
      <t-grid-item
        text="编辑"
        icon="edit-1"
        @click="onClick"
      />
    </t-grid>
  </view>
</template>

<script>
import TGrid from '@tdesign/uniapp/grid/grid.vue';
import TGridItem from '@tdesign/uniapp/grid-item/grid-item.vue';
import TButton from '@tdesign/uniapp/button/button.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TGrid,
    TGridItem,
    TButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onClick() {
      console.log('click grid-item');
    },
  },
};
</script>
<style>
.block {
    display: block;
    margin-bottom: 32rpx;
}

:deep(.grid-item__image) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: var(--td-bg-color-secondarycontainer);
    border-radius: 12rpx;
}
</style>
