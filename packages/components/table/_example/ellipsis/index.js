import SkylineBehavior from '@behaviors/skyline.js';

Component({
  behaviors: [SkylineBehavior],
  data: {
    // ellipsis / ellipsisTitle 的不同形式与取值
    columns: [
      // 1. ellipsis 为 Object
      {
        colKey: 'applicant',
        title: '申请人',
        ellipsis: { placement: 'center', title: '申请人' },
      },
      // 2. ellipsis + ellipsisTitle 均为 Object
      {
        colKey: 'status',
        title: '审批状态与处理结果',
        ellipsis: { placement: 'center', closeBtn: false },
        ellipsisTitle: { placement: 'center', title: '审批状态与处理结果' },
      },
      // 3. 关闭浮层关闭按钮
      {
        colKey: 'channel',
        title: '签署方式',
        ellipsis: { closeBtn: false },
        ellipsisTitle: { closeBtn: false },
      },
      // 4. 缺省 placement，使用默认值
      {
        colKey: 'email',
        title: '邮箱地址',
        ellipsis: { title: '邮箱地址' },
        ellipsisTitle: { title: '邮箱地址' },
      },
    ],
    data: [],
  },
  lifetimes: {
    attached() {
      const data = [
        {
          id: 1,
          applicant: '贾明（kyrieJia）',
          status: '审批通过，流程已全部走完',
          channel: '电子签署（在线完成）',
          email: 'jiaming.kyrie@example.com',
        },
        {
          id: 2,
          applicant: '张三（threeZhang）',
          status: '审批失败，请联系管理员处理',
          channel: '纸质签署（线下邮寄）',
          email: 'zhangsan.three@example.com',
        },
        {
          id: 3,
          applicant: '王芳（fangWang）',
          status: '审批已过期，需重新发起',
          channel: '电子签署（在线完成）',
          email: 'wangfang.fw@example.com',
        },
        {
          id: 4,
          applicant: '李雷（leiLi）',
          status: '审批中，等待上级确认',
          channel: '纸质签署（线下邮寄）',
          email: 'lilei.ll@example.com',
        },
        {
          id: 5,
          applicant: '韩梅梅（meiHan）',
          status: '审批通过，流程已全部走完',
          channel: '电子签署（在线完成）',
          email: 'hanmeimei.mm@example.com',
        },
      ];
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
