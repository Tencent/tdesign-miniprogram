<template>
  <view class="wrap">
    <view class="custom-navbar">
      <t-demo-navbar
        title="TDesign"
      />
    </view>
    <view class="indexes">
      <t-indexes
        :index-list="indexList"
        :sticky-offset="stickyOffset + 8"
        t-class="wrapper"
        @change="onChange"
        @select="onSelect"
      >
        <view
          v-for="(item, index) in list"
          :key="index"
        >
          <t-indexes-anchor
            :index="item.index"
            t-class="anchor-wrapper"
          >
            <view :class="'capsule' + (curIndex == item.index ? ' capsule--active' : '')">
              {{ item.index }}
            </view>
          </t-indexes-anchor>

          <t-cell-group>
            <t-cell
              v-for="(city, index1) in item.children"
              :key="index1"
              :title="city"
              :bordered="item.children.length - 1 != index"
            />
          </t-cell-group>
        </view>
      </t-indexes>
    </view>
  </view>
</template>

<script>
import TIndexes from '@tdesign/uniapp/indexes/indexes.vue';
import TIndexesAnchor from '@tdesign/uniapp/indexes-anchor/indexes-anchor.vue';
import TCellGroup from '@tdesign/uniapp/cell-group/cell-group.vue';
import TCell from '@tdesign/uniapp/cell/cell.vue';
import { handlePageScroll } from '@tdesign/uniapp/mixins/page-scroll';

const children = new Array(5).fill('列表内容');

const list = [
  {
    index: 1,
    children,
  },
  {
    index: 3,
    children,
  },
  {
    index: 5,
    children,
  },
  {
    index: 7,
    children,
  },
  {
    index: 8,
    children,
  },
  {
    index: 10,
    children,
  },
  {
    index: '#',
    children,
  },
];
export default {
  options: {
    styleIsolation: 'shared',
  },
  onPageScroll(e) {
    handlePageScroll(e);
  },
  components: {
    TIndexes,
    TIndexesAnchor,
    TCellGroup,
    TCell,
  },
  data() {
    return {
      list,
      indexList: list.map(item => item.index),
      curIndex: '',
      stickyOffset: 0,
      city: '',
    };
  },
  mounted() {
    setTimeout(() => {
      this.getCustomNavbarHeight();
    }, 30);
  },
  methods: {
    onChange(e) {
      const { index } = e;
      console.log('change:', index);
      this.curIndex = index;
    },

    onSelect(e) {
      const { index } = e;
      console.log('select:', index);
      this.curIndex = index;
    },

    getCustomNavbarHeight() {
      const query = uni.createSelectorQuery().in(this);
      query.select('.custom-navbar').boundingClientRect();
      query.exec((res) => {
        const { height = 0 } = res[0] || {};
        this.stickyOffset = height;
      });
    },
  },
};
</script>
<style scoped>
/* #ifdef H5 */
/* .wrap {
  height: 100%;
  overflow: auto;
} */
/* #endif */


.capsule {
    margin: 0 8px;
    height: 30px;
    border-radius: 15px;
    background-color: var(--td-bg-color-secondarycontainer, #f3f3f3);
    padding-left: 32rpx;
    display: flex;
    align-items: center;
    font-size: 14px;
    box-sizing: border-box;
}

.capsule--active {
    border: 1px solid var(--td-border-level-1-color, #e7e7e7);
}

:deep(.wrapper) {
    padding-top: 8px;
    /* height: 100%; */
}

.indexes,
.capsule--active,
:deep(.anchor-wrapper) {
    background: var(--td-bg-color-container, #ffffff);
}
</style>
