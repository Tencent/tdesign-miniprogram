import SkylineBehavior from '@behaviors/skyline.js';

// 短文本：自适应
const SHORT_TEXT = '单元格内容单元格内容单元格内容';
// 居中：滚动
const CENTER_LONG_TEXT = '单元格内容'.repeat(200);
// 底部：不滚动
const BOTTOM_LONG_TEXT = '单元格内容'.repeat(80);
// 超长：滚动
const EXTRA_LONG_TEXT = '单元格内容'.repeat(300);

Component({
  behaviors: [SkylineBehavior],
  data: {
    // 浮层状态：位置 / 标题 / 关闭按钮
    columns: [
      {
        colKey: 'centerWithTitle',
        title: '居中弹出·有标题',
        width: 180,
        ellipsis: { placement: 'center', title: '表格标题文案' },
        ellipsisTitle: { placement: 'center', title: '居中弹出·有标题' },
      },
      {
        colKey: 'centerNoTitle',
        title: '居中弹出·无标题',
        width: 180,
        ellipsis: { placement: 'center' },
      },
      {
        colKey: 'centerNoCloseBtn',
        title: '居中弹出·无标题无关闭按钮',
        width: 240,
        ellipsis: { placement: 'center', closeBtn: false },
      },
      {
        colKey: 'bottomWithTitle',
        title: '底部弹出·有标题',
        width: 180,
        ellipsis: { placement: 'bottom', title: '表格标题文案' },
        ellipsisTitle: { placement: 'bottom', title: '底部弹出·有标题' },
      },
      {
        colKey: 'bottomNoCloseBtn',
        title: '底部弹出·无关闭按钮',
        width: 220,
        ellipsis: { placement: 'bottom', title: '表格标题文案', closeBtn: false },
      },
      {
        colKey: 'bottomNoTitle',
        title: '底部弹出·无标题无关闭按钮',
        width: 240,
        ellipsis: { placement: 'bottom', closeBtn: false },
      },
    ],
    data: [],
  },
  lifetimes: {
    attached() {
      const data = [
        // 短文本
        { id: 1, centerText: SHORT_TEXT, bottomText: SHORT_TEXT },
        // 长文本
        { id: 2, centerText: CENTER_LONG_TEXT, bottomText: BOTTOM_LONG_TEXT },
        // 超长文本
        { id: 3, centerText: EXTRA_LONG_TEXT, bottomText: EXTRA_LONG_TEXT },
      ].map(({ id, centerText, bottomText }) => ({
        id,
        centerWithTitle: centerText,
        centerNoTitle: centerText,
        centerNoCloseBtn: centerText,
        bottomWithTitle: bottomText,
        bottomNoCloseBtn: bottomText,
        bottomNoTitle: bottomText,
      }));
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
