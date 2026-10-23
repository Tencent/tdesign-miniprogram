import SkylineBehavior from '@behaviors/skyline.js';

const statusNameListMap = {
  0: '审批通过',
  1: '审批失败',
  2: '审批过期',
};

Component({
  behaviors: [SkylineBehavior],
  data: {
    sort: null,
    columns: [
      { colKey: 'applicant', title: '申请人', align: 'center' },
      {
        colKey: 'status',
        title: '申请状态',
        width: 120,
        align: 'center',
        cell: ({ row }) => statusNameListMap[row.status] || '',
      },
      { colKey: 'channel', title: '签署方式', width: 120, align: 'center' },
      { colKey: 'email', title: 'Email', width: 180, align: 'center' },
      { colKey: 'createTime', title: 'Date', width: 100, align: 'center', sorter: true },
    ],
    data: [],
  },
  lifetimes: {
    attached() {
      const initData = [];
      const total = 5;
      for (let i = 0; i < total; i += 1) {
        initData.push({
          key: String(i + 1),
          applicant: ['贾明', '张三', '王芳'][i % 3],
          status: i % 3,
          channel: ['电子签署', '纸质签署', '纸质签署'][i % 3],
          email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
          matters: ['宣传物料制作费用', 'algolia 服务报销', '相关周边制作费', '激励奖品快递费'][i % 4],
          time: [2, 3, 1, 4][i % 4],
          createTime: [20220101, 20220201, 20220301, 20220401, 20220501][i % 4],
        });
      }
      this.setData({ data: initData });
    },
  },
  methods: {
    onSortChange(e) {
      console.log('[sort-change]', e.detail);
      this.setData({ sort: e.detail });
    },
  },
});
