<template>
  <t-list
    :async-loading="loading"
    @scroll="onLoadMore"
  >
    <t-cell
      v-for="item in listError"
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
    <template #footer>
      <t-loading
        v-if="showError"
        :indicator="false"
        @click.stop="onLoadMore"
      >
        <view class="custom-error">
          请求失败，点击重新<text>加载</text>
        </view>
      </t-loading>
    </template>
  </t-list>
</template>

<script>
import TCell from '@tdesign/uniapp/cell/cell.vue';
import TList from '@tdesign/uniapp/list/list.vue';
import TLoading from '@tdesign/uniapp/loading/loading.vue';

export default {
  components: {
    TCell,
    TLoading,
    TList,
  },
  data() {
    return {
      listError: [],
      loading: '',
      showError: false,
    };
  },
  mounted() {
    this.onLoadError();
  },
  methods: {
    onLoadError() {
      this.loading = 'loading';

      setTimeout(() => {
        for (let i = 0; i < 8; i += 1) {
          this.listError.push(`${this.listError.length + 1}`);
        }
        this.showError = true;
        this.loading = '';
      }, 1000);
    },

    onLoadMore() {
      this.showError = false;
      if (this.listError.length >= 60 || this.loading) return;

      this.loading = 'loading';

      setTimeout(() => {
        for (let i = 0; i < 15; i += 1) {
          this.listError.push(`${this.listError.length + 1}`);
        }
        this.loading = '';
      }, 1000);
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
