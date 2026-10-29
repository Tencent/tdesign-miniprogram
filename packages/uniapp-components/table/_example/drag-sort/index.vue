<template>
  <view>
    <t-table
      row-key="index"
      :columns="columns"
      :data="data"
      drag-sort="col"
      :show-header="true"
      @drag-sort="handleDragSort"
    />
  </view>
</template>

<script>
import SkylineBehavior from '@tdesign/uniapp/mixins/skyline.js';
import TTable from '@tdesign/uniapp/table/table.vue';

export default {
  components: {
    TTable,
  },
  mixins: [SkylineBehavior],
  data() {
    return {
      columns: [
        { colKey: 'applicant', title: '标题', ellipsis: true },
        { colKey: 'status', title: '标题', ellipsis: true },
        { colKey: 'channel', title: '标题', ellipsis: true },
        { colKey: 'detail.email', title: '标题', ellipsis: true },
      ],
      data: [
        {
          index: 1,
          applicant: '内容1',
          status: '内容2',
          channel: '内容3',
          detail: {
            email: '内容内容内容123',
          },
        },
        {
          index: 2,
          applicant: '内容4',
          status: '内容5',
          channel: '内容6',
          detail: {
            email: '内容内容内容123',
          },
        },
        {
          index: 3,
          applicant: '内容7',
          status: '内容8',
          channel: '内容9',
          detail: {
            email: '内容内容内容123',
          },
        },
      ],
    };
  },
  methods: {
    handleDragSort(e) {
      const { newData, sort } = e;
      if (sort === 'col') {
        this.columns = newData;
      } else {
        this.data = newData;
      }
    },
  },
};
</script>
