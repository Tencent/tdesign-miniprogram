<template>
  <view>
    <t-table
      row-key="id"
      :columns="columns"
      :data="data"
      :bordered="true"
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
    const total = 10;
    for (let i = 0; i < total; i++) {
      data.push({
        id: i + 1,
        index: i + 1,
        applicant: ['内容', '内容', '内容'][i % 3],
        status: ['内容', '内容', '内容'][i % 3],
        channel: ['内容', '内容', '内容'][i % 3],
        detail: {
          email: ['内容', '内容', '内容内容内容'][i % 3],
        },
      });
    }
    return {
      columns: [
        { colKey: 'applicant', title: '标题', ellipsis: true },
        { colKey: 'status', title: '标题', ellipsis: true },
        { colKey: 'channel', title: '标题', ellipsis: true },
        { colKey: 'detail.email', title: '标题', ellipsis: true },
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
