import SkylineBehavior from '@behaviors/skyline.js';

Component({
  behaviors: [SkylineBehavior],
  data: {
    columns: [
      { colKey: 'projName', title: '项目名称', width: 80, ellipsis: true },
      { colKey: 'projTag', title: '标签', width: 80 },
      { colKey: 'options', title: '操作', align: 'center', width: 120 },
    ],
    data: [],
    total: 9,
    pagination: {
      defaultCurrent: 1,
      defaultPageSize: 5,
      total: 9,
    },
  },
  lifetimes: {
    attached() {
      const data = [];
      const total = 9;
      for (let i = 0; i < total; i += 1) {
        data.push({
          index: i + 1,
          projName: ['项目名称', '项目名称', '项目名称'][i % 3],
          projTag: ['默认标签', '默认标签', '默认标签'][i % 3],
          options: {
            admin: ['管理', '管理', '管理'][i % 3],
            delete: ['删除', '删除', '删除'][i % 3],
          },
        });
      }
      this.setData({ data });
    },
  },
  methods: {
    onPageChange(e) {
      console.log('[page-change]', e.detail);
    },
  },
});
