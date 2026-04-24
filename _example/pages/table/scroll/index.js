import SkylineBehavior from '@behaviors/skyline.js';

Component({
  behaviors: [SkylineBehavior],
  data: {
    columns: [
      { colKey: 'applicant', title: '标题', width: 180 },
      { colKey: 'status', title: '标题', width: 180 },
      { colKey: 'channel', title: '标题', width: 180 },
      { colKey: 'detail.email', title: '标题', width: 180 },
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
          index: i + 1,
          applicant: ['横向平铺内容不省略', '内容', '内容'][i % 3],
          status: ['横向平铺内容不省略', '内容', '内容'][i % 3],
          channel: ['横向平铺内容不省略', '内容', '内容'][i % 3],
          detail: {
            email: ['横向平铺内容不省略', '内容', '内容'][i % 3],
          },
        });
      }
      this.setData({ data });
    },
  },
  methods: {
    handleRowClick(e) {
      console.log('[row-click]', e.detail);
    },
    handleCellClick(e) {
      console.log('[cell-click]', e.detail);
    },
  },
});
