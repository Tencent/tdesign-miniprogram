import SkylineBehavior from '@behaviors/skyline.js';

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

Component({
  behaviors: [SkylineBehavior],
  data: {
    sort: { sortBy: 'createTime', descending: true },
    columns: [
      { colKey: 'applicant', title: '申请人', width: 100 },
      { colKey: 'status', title: '申请状态', width: 100 },
      { colKey: 'channel', title: '签署方式', width: 100 },
      { colKey: 'email', title: 'Email', width: 180 },
      { colKey: 'createTime', title: 'Date', sorter: true, width: 120 },
    ],
    data: [...initData],
  },
  methods: {
    handleSortChange(e) {
      const { sort } = e.detail;
      this.setData({ sort });
      // 数据排序由外部处理
      const dataNew = [...initData];
      if (sort && sort.sortBy) {
        dataNew.sort((a, b) => (sort.descending ? b[sort.sortBy] - a[sort.sortBy] : a[sort.sortBy] - b[sort.sortBy]));
      }
      this.setData({ data: dataNew });
      console.log('[sort-change]', sort);
    },
  },
});
