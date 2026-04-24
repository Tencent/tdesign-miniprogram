import SkylineBehavior from '@behaviors/skyline.js';

Component({
  behaviors: [SkylineBehavior],
  data: {
    columns: [
      { colKey: 'applicant', title: '标题' },
      { colKey: 'status', title: '标题' },
      { colKey: 'channel', title: '标题' },
      { colKey: 'detail.email', title: '标题', ellipsis: true },
    ],
    data: [],
  },
  lifetimes: {
    attached() {
      const data = [];
      const total = 20;
      for (let i = 0; i < total; i += 1) {
        const content = ['内容', '内容', '内容', '内容', '内容'][i % 5];
        data.push({
          id: i + 1,
          index: i + 1,
          applicant: content,
          status: content,
          channel: content,
          detail: {
            email: content,
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
