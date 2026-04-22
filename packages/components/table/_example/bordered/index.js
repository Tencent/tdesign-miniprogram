import SkylineBehavior from '@behaviors/skyline.js';

Component({
  behaviors: [SkylineBehavior],
  data: {
    columns: [
      { colKey: 'applicant', title: '标题', ellipsis: true },
      { colKey: 'status', title: '标题', ellipsis: true },
      { colKey: 'channel', title: '标题', ellipsis: true },
      { colKey: 'detail.email', title: '标题', ellipsis: true },
    ],
    data: [],
  },
  lifetimes: {
    attached() {
      const data = [];
      const total = 10;
      for (let i = 0; i < total; i += 1) {
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
