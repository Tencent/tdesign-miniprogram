<template>
  <view>
    <t-table
      row-key="id"
      :fixed-rows="[1, 2]"
      :columns="columns"
      :data="data"
      :stripe="true"
      :max-height="400"
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
    const total = 20;
    for (let i = 0; i < total; i++) {
      const content = ['内容', '内容', '内容', '内容', '内容'][i % 5];
      data.push({
        index: i + 1,
        applicant: content,
        status: content,
        channel: content,
        detail: {
          email: content,
        },
        operation: content,
        more: content,
      });
    }
    return {
      columns: [
        // { colKey: 'applicant', title: '标题',  fixed: 'left' },
        // { colKey: 'status', title: '标题' },
        // { colKey: 'channel', title: '标题' },
        // { colKey: 'detail.email', title: '标题', ellipsis: true, fixed: 'right' },

        { colKey: 'applicant', title: '标题', fixed: 'left' },
        {
          colKey: 'status',
          title: '标题',
        },
        { colKey: 'channel', title: '标题' },
        { colKey: 'detail.email', title: '标题', ellipsis: true },
        { colKey: 'operation', title: '标题' },
        { colKey: 'more', title: '标题', fixed: 'right' },
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
