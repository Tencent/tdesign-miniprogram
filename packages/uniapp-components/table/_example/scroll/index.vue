<template>
  <view>
    <t-table
      row-key="id"
      :columns="columns"
      :data="data"
      table-content-width="720px"
      :show-header="true"
      cell-empty-content="-"
      @row-click="handleRowClick"
      @cell-click="handleCellClick"
    />
  </view>
</template>

<script>
import TTable from '@tdesign/uniapp/table/table.vue';
import SkylineBehavior from '@tdesign/uniapp/mixins/skyline.js';

export default {
  components: {
    TTable,
  },
  mixins: [SkylineBehavior],
  data() {
    const data = [];
    const total = 5;
    for (let i = 0; i < total; i++) {
      data.push({
        id: i + 1,
        index: i + 1,
        applicant: ['横向平铺内容不省略', '内容', '内容'][i % 3],
        status: ['横向平铺内容不省略', '内容', '内容'][i % 3],
        channel: ['横向平铺内容不省略', '内容', '内容'][i % 3],
        detail: {
          email: ['横向平铺内容不省略', '内容', '内容'][i % 3],
        },
      });
    }
    return {
      columns: [
        { colKey: 'applicant', title: '标题', width: 180 },
        { colKey: 'status', title: '标题', width: 180 },
        { colKey: 'channel', title: '标题', width: 180 },
        { colKey: 'detail.email', title: '标题', width: 180 },
      ],
      data,
    };
  },
  methods: {
    handleRowClick(e) {
      console.log('[row-click]', e);
    },
    handleCellClick(e) {
      console.log('[cell-click]', e);
    },
  },
};
</script>
