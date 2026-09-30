import SkylineBehavior from '@behaviors/skyline.js';

const originalData = [
  {
    id: 1,
    applicant: '内容',
    status: '这是一段很长的内容',
    channel: '这是一段很长很长的内容',
    detail: { email: '这是一段很长很长很长的邮箱地址' },
    remark: '这是一段很长很长很长的备注内容',
  },
  {
    id: 2,
    applicant: '这是一段很长很长很长的内容',
    status: '内容',
    channel: '内容',
    detail: { email: '内容' },
    remark: '内容',
  },
  {
    id: 3,
    applicant: '内容',
    status: '这是一段很长很长很长很长的内容',
    channel: '内容',
    detail: { email: '内容' },
    remark: '内容',
  },
];

Component({
  behaviors: [SkylineBehavior],
  data: {
    columns: [
      // boolean：值为 true，浮层默认显示单元格内容
      { colKey: 'applicant', title: '标题(布尔)', ellipsis: true },
      // Object：整体透传给 Popover 组件；ellipsisTitle 优先级高于 ellipsis
      {
        colKey: 'status',
        title: '很长很长的标题用于测试表头超出省略',
        ellipsis: { placement: 'bottom', theme: 'light' },
        ellipsisTitle: { props: { placement: 'bottom', theme: 'brand' }, content: () => '自定义表头浮层内容' },
      },
      // Function 返回 boolean：按行动态决定是否省略；ellipsisTitle = false 表示仅单元格超出省略
      {
        colKey: 'channel',
        title: '标题(函数)',
        ellipsis: ({ rowIndex }) => rowIndex % 2 === 0,
        ellipsisTitle: false,
      },
      // Function 返回内容：自定义浮层显示的内容；表头用 Function 单独控制
      {
        colKey: 'remark',
        title: '标题(函数)',
        ellipsis: ({ row }) => `备注：${row.remark}`,
        ellipsisTitle: ({ colIndex }) => colIndex === 3,
      },
      // Function 返回 Object：同时透传 Popover 属性与自定义浮层内容
      {
        colKey: 'detail.email',
        title: '标题',
        ellipsis: ({ row }) => ({ props: { theme: 'warning' }, content: () => `邮箱：${row.detail.email}` }),
        ellipsisTitle: true,
      },
    ],
    data: [],
  },
  lifetimes: {
    attached() {
      const data = [];
      const total = 9;
      for (let i = 0; i < total; i += 1) {
        data.push({ ...originalData[i % originalData.length], id: i + 1 });
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
