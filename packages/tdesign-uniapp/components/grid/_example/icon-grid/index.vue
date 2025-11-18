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
import tGrid from 'tdesign-uniapp/grid/grid.vue';
import tGridItem from 'tdesign-uniapp/grid-item/grid-item.vue';
import tButton from 'tdesign-uniapp/button/button.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tGrid,
    tGridItem,
    tButton,
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
    --td-button-medium-icon-font-size: 48rpx;

    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: var(--td-bg-color-secondarycontainer);
    border-radius: 12rpx;
}
</style>
