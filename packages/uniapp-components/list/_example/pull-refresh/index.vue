<template>
  <t-pull-down-refresh
    v-model="refreshing"
    @refresh="onRefresh"
  >
    <t-list
      :async-loading="loading"
      @scroll="onScroll"
    >
      <t-cell
        v-for="item in listPull"
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
  </t-pull-down-refresh>
</template>

<script>
import TCell from '@tdesign/uniapp/cell/cell.vue';
import TList from '@tdesign/uniapp/list/list.vue';
import TPullDownRefresh from '@tdesign/uniapp/pull-down-refresh/pull-down-refresh.vue';

const ONCE_LOAD_NUM = 20;
const MAX_DATA_LEN = 60;

export default {
  components: {
    TCell,
    TList,
    TPullDownRefresh,
  },
  data() {
    return {
      listPull: [],
      loading: '',
      refreshing: false,
    };
  },
  mounted() {
    this.onLoadPull();
  },
  methods: {
    loadData(isRefresh = false) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const nextList = isRefresh ? [] : [...this.listPull];

          for (let i = 0; i < ONCE_LOAD_NUM; i += 1) {
            nextList.push(`${nextList.length + 1}`);
          }

          this.listPull = nextList;
          resolve();
        }, 1000);
      });
    },

    onLoadPull(isRefresh = false) {
      if ((this.listPull.length >= MAX_DATA_LEN && !isRefresh) || this.loading) return;

      this.loading = 'loading';
      this.loadData(isRefresh).then(() => {
        this.loading = '';
        this.refreshing = false;
      });
    },

    onScroll(bottomDistance) {
      if (bottomDistance < 50) {
        this.onLoadPull();
      }
    },

    onRefresh() {
      this.refreshing = true;
      this.onLoadPull(true);
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
