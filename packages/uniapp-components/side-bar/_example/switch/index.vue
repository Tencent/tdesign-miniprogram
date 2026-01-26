<template>
  <view>
    <view class="custom-navbar">
      <t-demo-navbar
        custom-class="demo-navbar"
        title="TDesign"
      />
    </view>

    <view
      class="side-bar-wrapper"
      :style="'height: calc(100vh - ' + navbarHeight + 'px)'"
    >
      <t-side-bar
        :value="sideBarIndex"
        @change="onSideBarChange"
      >
        <t-side-bar-item
          v-for="(item, index) in categories"
          :key="index"
          :value="item.value || index"
          :label="item.label"
          :disabled="item.disabled"
          :badge-props="item.badgeProps"
        />
      </t-side-bar>
      <view
        class="content"
        :style="'transform: translateY(-' + sideBarIndex * 100 + '%)'"
      >
        <scroll-view
          v-for="(item, index) in categories"
          :key="index"
          class="section"
          scroll-y
          :scroll-top="scrollTop"
          scroll-with-animation
          :show-scrollbar="false"
        >
          <view class="title">
            {{ item.title || item.label }}
          </view>

          <t-cell-group>
            <block
              v-for="(cargo, index1) in item.items"
              :key="index1"
            >
              <t-cell
                t-class-left="cell"
                :title="cargo.label + index"
              >
                <template
                  #image
                >
                  <t-image
                    shape="round"
                    :src="cargo.image"
                    lazy
                    t-class="image"
                  />
                </template>
              </t-cell>
            </block>
          </t-cell-group>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import TSideBar from 'tdesign-uniapp/side-bar/side-bar.vue';
import TSideBarItem from 'tdesign-uniapp/side-bar-item/side-bar-item.vue';
import TCellGroup from 'tdesign-uniapp/cell-group/cell-group.vue';
import TCell from 'tdesign-uniapp/cell/cell.vue';
import TImage from 'tdesign-uniapp/image/image.vue';

const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';
const items = new Array(12).fill(
  {
    label: '标题文字',
    image,
  },
  0,
  12,
);

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TSideBar,
    TSideBarItem,
    TCellGroup,
    TCell,
    TImage,
  },
  data() {
    return {
      sideBarIndex: 1,
      scrollTop: 0,

      categories: [
        {
          label: '选项一',
          title: '标题一',
          badgeProps: {},
          items,
        },
        {
          label: '选项二',
          title: '标题二',
          badgeProps: {
            dot: true,
          },
          items: items.slice(0, 10),
        },
        {
          label: '选项三',
          title: '标题三',
          badgeProps: {},
          items: items.slice(0, 6),
        },
        {
          label: '选项四',
          title: '标题四',
          badgeProps: {
            count: 8,
          },
          items: items.slice(0, 8),
        },
        {
          label: '选项五',
          title: '标题五',
          badgeProps: {},
          disabled: true,
          items: items.slice(0, 8),
        },
      ],

      navbarHeight: 0,
      offsetTopList: [],

      cargo: {
        label: '',
        image: '',
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.getCustomNavbarHeight();
    }, 30);
  },
  methods: {
    getCustomNavbarHeight() {
      const query = uni.createSelectorQuery().in(this);
      query.select('.custom-navbar').boundingClientRect();
      query.exec((res) => {
        const { height = 0 } = res[0] || {};
        this.navbarHeight = height;
      });
    },

    onSideBarChange(e) {
      const { value } = e;
      console.log('change: ', value);
      this.sideBarIndex = value;
      this.scrollTop = 0;
    },
  },
};
</script>
<style>
page {
    background-color: var(--td-bg-color-container);
}

page .round-image {
    border-radius: 12rpx;
}

.side-bar-wrapper {
    display: flex;
    height: 100vh;
    overflow: hidden;
}

.side-bar-wrapper .content {
    flex: 1;
    transition: transform 0.3s ease;
}

.side-bar-wrapper .section {
    padding: 32rpx 0;
    box-sizing: border-box;
    height: 100%;
}

.side-bar-wrapper .title {
    padding-left: 40rpx;
    margin-bottom: 8rpx;
    font: var(--td-font-body-medium);
    color: var(--td-text-color-primary);
}

.side-bar-wrapper :deep(.image) {
    width: 96rpx;
    height: 96rpx;

    position: relative;
}

.side-bar-wrapper .cell {
    margin-right: 32rpx !important;
}

.side-bar-wrapper :deep(.image)::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border-radius: 24rpx;
    border: 2rpx solid var(--td-gray-color-4);
    transform-origin: 0 0;
    transform: scale(0.5);
}
</style>
