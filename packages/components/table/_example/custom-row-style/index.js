import SkylineBehavior from '@behaviors/skyline.js';

Component({
  behaviors: [SkylineBehavior],
  data: {
    columns: [
      { colKey: 'applicant', title: '申请人', width: 100, fixed: 'left' },
      { colKey: 'status', title: '审批状态', width: 120 },
      {
        colKey: 'time',
        title: '申请耗时(天)',
        width: 120,
        align: 'center',
        className: ({ row }) => (row.time >= 9 ? 'custom-cell-class-name' : ''),
      },
      {
        colKey: 'channel',
        title: '签署方式',
        width: 100,
        align: 'right',
        className: () => 'custom-cell-class-name',
      },
      { colKey: 'detail.email', title: '邮箱地址', width: 160, ellipsis: true },
    ],
    data: [],
  },
  lifetimes: {
    attached() {
      const data = [];
      const total = 5;
      for (let i = 0; i < total; i += 1) {
        data.push({
          id: i + 1,
          applicant: ['贾明', '张三', '王芳'][i % 3],
          status: ['审批通过', '审批失败', '审批过期'][i % 3],
          channel: ['电子签署', '纸质签署', '纸质签署'][i % 3],
          detail: {
            email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
          },
          matters: ['宣传物料制作费用', 'algolia 服务报销', '相关周边制作费', '激励奖品快递费'][i % 4],
          time: [2, 10, 1][i % 3],
        });
      }

      this.setData({
        data,
      });
    },
  },
  methods: {
    onRowClick(e) {
      console.log('[row-click]', e.detail);
    },
  },
});
