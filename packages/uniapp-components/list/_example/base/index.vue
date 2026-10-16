<template>
  <t-list
    :async-loading="loading"
    @scroll="onScroll"
  >
    <t-cell
      v-for="item in list"
      :key="item"
      align="middle"
      t-class-center="list-cell__center"
      t-class-note="list-cell"
      note-style="justify-content: center"
    >
      <template #note>
        <view class="cell">
          {{ item }}
        </view>
      </template>
    </t-cell>
  </t-list>
</template>

<script>
import TCell from '@tdesign/uniapp/cell/cell.vue';
import TList from '@tdesign/uniapp/list/list.vue';

const ONCE_LOAD_NUM = 20;
const MAX_DATA_LEN = 60;

export default {
  components: {
    TCell,
    TList,
  },
  data() {
    return {
      list: [],
      loading: '',
    };
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    loadData(isRefresh = false) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const nextList = isRefresh ? [] : [...this.list];

          for (let i = 0; i < ONCE_LOAD_NUM; i += 1) {
            nextList.push(`${nextList.length + 1}`);
          }

          this.list = nextList;
          resolve();
        }, 1000);
      });
    },

    onLoad(isRefresh = false) {
      if ((this.list.length >= MAX_DATA_LEN && !isRefresh) || this.loading) return;

      this.loading = 'loading';
      this.loadData(isRefresh).then(() => {
        this.loading = '';
      });
    },

    onScroll(bottomDistance) {
      if (bottomDistance < 50) {
        this.onLoad();
      }
    },
  },
};
</script>

<style lang="less">
.list-cell__center {
  display: none;
}

.list-cell {
  width: 100%;
}

.cell {
  width: 100%;
  text-align: center;
}
</style>
