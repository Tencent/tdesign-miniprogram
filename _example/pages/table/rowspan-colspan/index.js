import SkylineBehavior from '@behaviors/skyline.js';

Component({
  behaviors: [SkylineBehavior],
  data: {
    columns: [
      { colKey: 'index', title: '序号', width: 60 },
      { colKey: 'name', title: '姓名' },
      { colKey: 'department', title: '部门' },
      { colKey: 'status', title: '状态' },
    ],
    data: [
      { id: 1, index: 1, name: '张三', department: '研发部', status: '在职' },
      { id: 2, index: 2, name: '李四', department: '研发部', status: '在职' },
      { id: 3, index: 3, name: '王五', department: '设计部', status: '离职' },
      { id: 4, index: 4, name: '赵六', department: '产品部', status: '在职' },
    ],
    // 注意：小程序中 rowspanAndColspan 需要通过函数传递
    // 合并规则：
    // 1. 第1-2行的"部门"列合并（rowspan）
    // 2. 第3行的"姓名"和"部门"列合并（colspan）
    rowspanAndColspan: null,
  },
  lifetimes: {
    attached() {
      this.setData({
        rowspanAndColspan: ({ rowIndex, colIndex }) => {
          // 第1行第2列（部门）：向下合并2行
          if (rowIndex === 0 && colIndex === 2) {
            return { rowspan: 2, colspan: 1 };
          }
          // 第2行第2列（部门）：被上面合并，不渲染
          if (rowIndex === 1 && colIndex === 2) {
            return { rowspan: 0, colspan: 0 };
          }
          // 第3行第1列（姓名）：向右合并2列
          if (rowIndex === 2 && colIndex === 1) {
            return { rowspan: 1, colspan: 2 };
          }
          // 第3行第2列（部门）：被左边合并，不渲染
          if (rowIndex === 2 && colIndex === 2) {
            return { rowspan: 0, colspan: 0 };
          }
          return {};
        },
      });
    },
  },
});
