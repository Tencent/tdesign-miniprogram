import SkylineBehavior from '@behaviors/skyline.js';

Component({
  behaviors: [SkylineBehavior],
  data: {
    // 组合 ellipsis + ellipsisTitle 的不同形式与取值
    // 约束：弹出层方向仅 bottom / center；弹出内容为单元格内容；弹出标题为该列表头
    columns: [
      // 1. ellipsis 为 Object：整体透传给 Popup（center 弹出 + 列表头作为标题）；content 缺省时回退为单元格内容
      {
        colKey: 'applicant',
        title: '申请人',
        ellipsis: { placement: 'center', title: '申请人' },
      },
      // 2. ellipsis 为 Object + ellipsisTitle 为 true：表头内容也超出省略（优先级高于 ellipsis）；bottom 弹出
      {
        colKey: 'status',
        title: '审批状态与处理结果',
        ellipsis: { placement: 'bottom', title: '审批状态' },
        ellipsisTitle: true,
      },
      // 3. ellipsis 为 Object + ellipsisTitle 为 false：仅单元格超出省略，表头不省略
      {
        colKey: 'channel',
        title: '签署方式',
        ellipsis: { placement: 'bottom', title: '签署方式' },
        ellipsisTitle: false,
      },
      // 4. ellipsis 与 ellipsisTitle 均为 Object：单元格浮层与表头浮层均带列表头标题；bottom 弹出
      {
        colKey: 'email',
        title: '邮箱地址',
        ellipsis: { placement: 'bottom', title: '邮箱地址' },
        ellipsisTitle: { placement: 'bottom', title: '邮箱地址' },
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
