<template>
  <view>
    <t-table
      row-key="id"
      :columns="columns"
      :data="data"
      :sort="sort"
      :show-header="true"
      cell-empty-content="-"
      @sort-change="handleSortChange"
    />
  </view>
</template>

<script>
import SkylineBehavior from '@tdesign/uniapp/mixins/skyline.js';
import TTable from '@tdesign/uniapp/table/table.vue';

const initData = [];
const total = 5;
for (let i = 0; i < total; i += 1) {
  initData.push({
    id: i + 1,
    applicant: ['贾明', '张三', '王芳'][i % 3],
    status: i % 3,
    channel: ['电子签署', '纸质签署', '纸质签署'][i % 3],
    email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
    createTime: [20220101, 20220201, 20220301, 20220401, 20220501][i % 5],
  });
}

export default {
  components: {
    TTable,
  },
  mixins: [SkylineBehavior],
  data() {
    return {
      sort: { sortBy: 'createTime', descending: true },
      columns: [
        { colKey: 'applicant', title: '申请人', width: 100 },
        { colKey: 'status', title: '申请状态', width: 100 },
        { colKey: 'channel', title: '签署方式', width: 100 },
        { colKey: 'email', title: 'Email', width: 180 },
        { colKey: 'createTime', title: 'Date', sorter: true, width: 120 },
      ],
      data: [...initData],
    };
  },
  methods: {
    handleSortChange(e) {
      const { sort } = e;
      this.sort = sort;
      // 数据排序由外部处理
      const dataNew = [...initData];
      if (sort && sort.sortBy) {
        dataNew.sort((a, b) => (sort.descending ? b[sort.sortBy] - a[sort.sortBy] : a[sort.sortBy] - b[sort.sortBy]));
      }
      this.data = dataNew;
      console.log('[sort-change]', sort);
    },
  },
};
</script>
