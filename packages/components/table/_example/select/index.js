import SkylineBehavior from '@behaviors/skyline.js';

Component({
  behaviors: [SkylineBehavior],
  data: {
    selectedRowKeys1: [],
    selectedRowKeys2: [],
    multipleColumns: [
      { colKey: 'row-select', type: 'multiple' },
      { colKey: 'projName', title: '项目名称' },
      { colKey: 'projTag', title: '项目名称' },
      { colKey: 'options', title: '操作', align: 'center' },
    ],
    singleColumns: [
      { colKey: 'row-select', type: 'single' },
      { colKey: 'projName', title: '项目名称' },
      { colKey: 'projTag', title: '项目名称' },
      { colKey: 'options', title: '操作', align: 'center' },
    ],
    data: [],
  },
  lifetimes: {
    attached() {
      const data = [];
      const total = 5;
      for (let i = 0; i < total; i += 1) {
        data.push({
          index: i + 1,
          projName: ['项目名称1', '项目名称2', '项目名称3'][i % 3],
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
    onSelectChange1(e) {
      const { selectedRowKeys } = e.detail;
      console.log('onSelectChange1', selectedRowKeys);
      this.setData({ selectedRowKeys1: selectedRowKeys });
    },
    onSelectChange2(e) {
      const { selectedRowKeys } = e.detail;
      console.log('onSelectChange2', selectedRowKeys);
      this.setData({ selectedRowKeys2: selectedRowKeys });
    },
  },
});
